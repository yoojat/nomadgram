from django.conf.urls import url
from . import views
urlpatterns = [
    url(
        regex=r'^$',
        view=views.Notifications.as_view(),
        name='notifications'
    ),

]

#/images/3/like/

#0 create the url and the view
#1 take the id from the url
#2 we want to find an image with this id
#3 we want to create a like for that image
