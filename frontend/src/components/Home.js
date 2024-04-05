import React, { useEffect } from 'react'
import SidePanel from './SidePanel'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts, selectCategoryFilter } from '../features/blogger/bloggerSlice'
import BlogExcerpt from '../features/blogger/BlogExcerpt'
import { fetchCategories, selectAllCategories } from '../features/categories/categoriesSlice'

const Home = () => {

   const dispatch = useDispatch()
   const posts = useSelector(selectAllPosts)
   const postsStatus = useSelector(getPostsStatus)
   const errors = useSelector(getPostsError)
   const categoryFilter = useSelector(selectCategoryFilter)

   console.log('posts is ',posts)

   const categories = useSelector(selectAllCategories)

   useEffect(() => {
    console.log("dispatched first useeffect")
     dispatch(fetchCategories())
   },[dispatch])

   useEffect(() => {
       if(postsStatus === 'idle'){
        dispatch(fetchPosts())
        
       }
   },[dispatch,postsStatus])

   const filteredPosts = categoryFilter ? posts.filter((post) => post.category.some((categoryId) => categories.find((category) => category.id === categoryId)?.name === categoryFilter)): posts;
   let content 
   if (postsStatus === "loading") {
    content = <div className="center">
      meow
       <h1>loading...</h1> 
    </div>
}
   else if(postsStatus === "succeeded") {
    content = filteredPosts.map((post) => 
      <BlogExcerpt key={post.id} postId={post.id} post={post} posterId = {post.owner} />
    )
   }

   else if(postsStatus === "failed") {
    content = <p>Failed{errors} </p>
   }

  

  return (
    <div className='container mx-auto mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='md:col-span-2 shadow-lg text-center md:pl-12 md:py-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {content}
            </div>
          </div>
          <div className='md:col-span-1'><SidePanel /></div>
        </div>
  </div>

  )
}

export default Home