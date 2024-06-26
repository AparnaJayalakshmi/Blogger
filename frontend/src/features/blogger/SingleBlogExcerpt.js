import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from 'react-redux';


const SingleBlogExcerpt = ({post}) => {
  const users = useSelector(selectAllUsers);
  let owner = users.find((user) => user.id === post.owner);

  const date = post && post.date_posted ? new Date(post.date_posted) : new Date() ;
  const options = {year : "numeric" , month : "long" , day : "numeric"}
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="mt-2">
      <div className="flex bg-purple justify-around text-white font-bold text-lg items-center">
        <h5>
          Posted by: {owner.username}
        </h5>
        <p className="flex gap-1 items-center"><AccessTimeIcon className="text-sm" /> {formattedDate}</p>
      </div>
      <div className="">
        <img className="px-2 mt-3 rounded-lg  object-contain h-96 " width='100%' src={'http://127.0.0.1:8000/'+post.image} alt={post.title} />
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-extrabold text-2xl underline cursor-pointer">{post.title}</h1>
        <p className="mt-2 text-start ml-3 antialiased">{post.description}</p>
      </div>
      
    </div>
  )
}

export default SingleBlogExcerpt