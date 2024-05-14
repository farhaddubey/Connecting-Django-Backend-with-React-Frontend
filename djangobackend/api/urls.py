from api import views
from django.urls import path

from .views import StudentList

urlpatterns = [
    path('student/', views.StudentList.as_view()),
]
