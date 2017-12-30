from rest_framework import serializers
from . import models
from nomadgram.images import serializers as images_serializers




class UserProfileSerializer(serializers.ModelSerializer):

    images = images_serializers.CountImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    # ReadOnlyField는 해당 필드를 수정하지 않는다는 것, post_count, followers_count, following_count는 모델의 property일뿐

    class Meta:
        model = models.User
        fields = (
            'profile_image',
            'username',
            'name',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images'
        )


class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )
