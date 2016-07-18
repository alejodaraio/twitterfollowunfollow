#follow
$('.not-following .user-actions-follow-button').click();

#Unfollow
$('.ProfileCard-content').each(function(){var status = $(this).find('.FollowStatus').text();var unfollowButton = $(this).find('.user-actions-follow-button');if(status != 'follows you'){unfollowButton.click();}});
