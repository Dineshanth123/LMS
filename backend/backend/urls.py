from django.contrib import admin
from django.urls import path
from webapp.views import CourseListCreateAPIView, CourseRetrieveUpdateDestroyAPIView,MycourseDetailView,MycourseListView, add_to_cart

urlpatterns = [
    path('admin/', admin.site.urls),
    path('courses/', CourseListCreateAPIView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyAPIView.as_view(), name='course-retrieve-update-destroy'),
    path('mycourses/', MycourseListView.as_view(), name='mycourse-list'),
    path('mycourses/<int:pk>/', MycourseDetailView.as_view(), name='mycourse-detail'),
    path('add_to_cart/', add_to_cart, name='add_to_cart'),
]
 