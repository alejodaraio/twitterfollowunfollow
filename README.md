# Follow and unfollow script Twitter
## Firefox :
- Go on the targeted page
- Open the Inspector with F12
- Click on "Console"
- Copy-paste the script after the ">>"
- When you want to stop the script refresh the page (ctrl+maj+R)

(If you can't copy paste, follow the instruction on the error)

## Chrome :
- Go on the targeted page
- Open the console with ctrl+shift+j
- Copy-paste the script after the ">>"
- When you want to stop the script refresh the page

# Follow
To follow a lot of people listed on a page from someone's followers (https://twitter.com/twitter/followers) and someone's followings (https://twitter.com/twitter/following) to list members (https://twitter.com/twitter/lists/developers)  

```javascript
setInterval(function(){window.scrollTo(0,document.body.scrollHeight);$('.not-following .user-actions-follow-button.js-follow-btn').click()},1000);
```
Useful to copy followings and mass followback (just use it on https://twitter.com/followers)  

# Unfollow
To unfollow everyone, just go on https://twitter.com/following and run :  

```javascript
setInterval(function(){t=$(".following").find(".follow-button");if(!t[0]){window.scrollTo(0,$(document).height());}else{ console.log(t.attr("class")); t.trigger("click");}},100)
```

# Like
To like each Tweets on a page just run this :

```javascript
setInterval(function(){window.scrollTo(0,document.body.scrollHeight);$('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click()},1000)
```
(source for follow : https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845#.suq8tqyhr, I've just changed it for unfollow and like)
