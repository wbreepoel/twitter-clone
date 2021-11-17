var params = new URLSearchParams(window.location.search)

var currentUser = params.get("user");
console.log(currentUser);

var users = {
 user1 : {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'elonmusk.jpg',
    coverPhotoURL: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/1080x360',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
},

 user2 : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg',
    coverPhotoURL: 'https://pbs.twimg.com/profile_banners/50393960/1626063534/1500x500',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        },
        {
            text: 'In 2021, I will read even more books.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
}
};


var navItems = document.getElementsByClassName("navigation-item");

var floorNumbers = function (number) {
    if(number > 999 && number <= 999499) {
        return (number/1000).toFixed()+"k";
    } else if (number > 999499) {
        return (number/1000000).toFixed(1) + "M";
    } else {
        return number;
    }
}

var button = document.querySelector(".btn")
button.addEventListener("click",function(){
    if (button.innerHTML === "Following") {
        button.innerHTML = "Follow";
    } else {
        button.innerHTML = "Following";
    }
})

for (var item of navItems) {
    item.addEventListener("click", function(e){
        var underlineItems = document.getElementsByClassName("underline-nav-item");
        for(var underline of underlineItems) {
            underline.classList.add("hidden");
        }
       e.currentTarget.getElementsByClassName("underline-nav-item")[0].classList.remove("hidden");
        
    })
}

var counter = 0;
for(var tweet in users[currentUser].tweets) {
    counter+=1;
}
console.log(counter);

var header = document.querySelector(".user-header-data").innerHTML = `<h4>${users[currentUser].displayName}</h4> <p>${floorNumbers(counter)} tweets</p>`

var coverImage = document.getElementsByClassName("cover-image")[0]
coverImage.style.backgroundImage = `url("${users[currentUser].coverPhotoURL}")`

var avatar = document.querySelector(".avatar").innerHTML = `<img class="avatar-img" src="${users[currentUser].avatarURL}" alt="">    
                                                            <h4>${users[currentUser].displayName}</h4> <p>${users[currentUser].userName}</p> <p> <i class="bi bi-calendar3"></i> Joined ${users[currentUser].joinedDate}</p> 
                                                            <p class="following-text"><span>${floorNumbers(users[currentUser].followingCount)}</span> Following</p> 
                                                            <p class="followers-text"><span>${floorNumbers(users[currentUser].followerCount)}</span> Followers</p>`



for (var i = 0; i<users[currentUser].tweets.length; i++) {
    console.log(i)
    var newTweet = document.createElement("div")
    newTweet.classList.add("tweet")
    newTweet.innerHTML = `<div class="small-avatar-img"><img class="avatar-img-tweet" src="${users[currentUser].avatarURL}" alt=""></div>
    <div class="tweet-data">
        <h6>${users[currentUser].displayName}</h6> <p class="username-tweet">${users[currentUser].userName}</p>
        <p class="tweet-text">${users[currentUser].tweets[i].text}</p>
        <div class="tweet-icons">
        <div class="icon-box icon-box-1"><i class="bi bi-reply tweet-icon icon-1"></i></div>
        <div class="icon-box icon-box-2"><i class="bi bi-arrow-clockwise tweet-icon icon-2"></i></div> 
        <div class="icon-box icon-box-3"><i class="bi bi-heart tweet-icon icon-3"></i></div> 
        <div class="icon-box icon-box-4"><i class="bi bi-box-arrow-up tweet-icon icon-4"></i></div>
        </div>
    </div>
    <div class="more-options-button"><i class="bi bi-three-dots tweet-icon"></i></div>`

     document.querySelector(".tweets").appendChild(newTweet);
}



