#Follow and unfollow script Twitter

With Chrome open the console ctrl+shift+j and Paste to follow or unfollow.

For example to follow you must go to https://twitter.com/UserToFollow/followers and to unfollow just go to https://twitter.com/following

#follow
```javascript
$('.user-actions.not-following').each(function () {
    var followButton = $(this).find('.user-actions-follow-button');
        followButton.click();
});
```

#Unfollow
```javascript
$('.ProfileCard-content').each(function () {
    var status = $(this).find('.FollowStatus').text();
    var unfollowButton = $(this).find('.user-actions-follow-button');
    if (status != 'follows you') {
        unfollowButton.click();
    }
});
```
