from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,

)
urlpatterns = [
    path('', views.HomeAPIView.as_view(), name='home'),
    path('blog/<str:pk>/', views.PostDetailAPIView.as_view(), name='post_detail'),
    path('category/', views.CategoryAPIView.as_view(), name='categories'),
    path('users/', views.UsersAPIView.as_view(), name='users'),
    path('register/', views.UserRegistrationAPIView.as_view(), name='user-registration'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
