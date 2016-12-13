# Follow and unfollow script Twitter
## Firefox :
- Go on the targeted page
- Open the Inspector with F12
- Click on "Console"
- Copy-paste the script after the ">>"

(If you can't copy paste, follow the instruction on the error)

## Chrome :
- Go on the targeted page
- Open the console with ctrl+shift+j
- Copy-paste the script after the ">>" 

# Follow
To follow a lot of people listed on a page from someone's followers (https://twitter.com/treyssatvincent/followers) and someone's followings (https://twitter.com/treyssatvincent/following) to list members (https://twitter.com/Crowdfire/lists/cfchatters/members)  

```javascript
$('.user-actions.not-following').each(function () {
    var followButton = $(this).find('.user-actions-follow-button');
        followButton.click();
});
```

Useful to copy followings and mass followback (just use it on https://twitter.com/followers)

# Unfollow
To unfollow everyones, just go on https://twitter.com/following and run :  
```javascript
$('.ProfileCard-content').each(function () {
    var status = $(this).find('.FollowStatus').text();
    var unfollowButton = $(this).find('.user-actions-follow-button');
    if (status != 'follows you') {
        unfollowButton.click();
    }
});
```
