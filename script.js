var params = new URLSearchParams(window.location.search)

var currentUser = params.get("user");

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
            timestamp: '11/19/2021 09:11:51'
        },
        {
            text: 'Starship to the moon',
            timestamp: '07/19/2021 10:42:10'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '03/10/2021 00:01:20'
            
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
            timestamp: '11/19/2021 08:15:51'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '10/18/2021 07:11:51'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '08/11/2021 18:37:12'
        },
        {
            text: 'In 2021, I will have read even more books.',
            timestamp: '08/11/2021 18:40:20'
        }
    ]
}
};

var navItems = document.getElementsByClassName("navigation-it§em");

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
if(button){
button.addEventListener("click",function(){
    if (button.innerHTML === "Following") {
        button.innerHTML = "Follow";
    } else {
        button.innerHTML = "Following";
    }
})
}

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
if (currentUser) {
for(var tweet in users[currentUser].tweets) {
    counter+=1;
}
}

var header = document.querySelector(".user-header-data")
if(header){
header.innerHTML = `<h4>${users[currentUser].displayName}</h4> <p>${floorNumbers(counter)} tweets</p>`
}

var coverImage = document.getElementsByClassName("cover-image")[0]
if(coverImage){
coverImage.style.backgroundImage = `url("${users[currentUser].coverPhotoURL}")`
}

var avatar = document.querySelector(".avatar")
if(avatar){
avatar.innerHTML = `<img class="avatar-img" src="${users[currentUser].avatarURL}" alt="">    
                                                            <h4>${users[currentUser].displayName}</h4> <p>${users[currentUser].userName}</p> <p> <i class="bi bi-calendar3"></i> Joined ${users[currentUser].joinedDate}</p> 
                                                            <p class="following-text"><span>${floorNumbers(users[currentUser].followingCount)}</span> Following</p> 
                                                            <p class="followers-text"><span>${floorNumbers(users[currentUser].followerCount)}</span> Followers</p>`
                                                        }

var sortedTweets = []

for (var i = 1; i < Object.keys(users).length+1; i++) {
    for (var j = 0; j < users[`user${i}`].tweets.length; j++) {
        sortedTweets.push([users[`user${i}`].tweets[j].text, 
                           users[`user${i}`].tweets[j].timestamp,
                           users[`user${i}`].avatarURL,
                           users[`user${i}`].userName,
                           users[`user${i}`].displayName,
                           `user${i}`]
                           )
    }
}

sortedTweets.sort(function(a, b){
    var c = new Date(a[1])
    var d = new Date(b[1])

    return d-c;
})

var calculateTime = function (tweetDate) {
    var timeInMillisec = new Date().getTime() - new Date(tweetDate).getTime();
    var year,
      month,
      day,
      hour,
      minute,
      second;

    second = Math.floor(timeInMillisec / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;

    if (year >= 1) {
        console.log(`${year}y`);
    } else if (month >= 1) {
        return `${month}mo`;
    } else if (day >= 1) {
        return `${day}d`;
    } else if (hour >= 1) {
        return `${hour}h`;
    } else if (minute >= 1) {
        return `${minute}m`;
    } else if (second >= 1) {
        return `${second}s`;
    }
    
}

if(currentUser) {
for (var i = 0; i<users[currentUser].tweets.length; i++) {
    var newTweet = document.createElement("div")
    newTweet.classList.add("tweet")
    newTweet.innerHTML = `<div class="small-avatar-img"><img class="avatar-img-tweet" src="${users[currentUser].avatarURL}" alt=""></div>
    <div class="tweet-data">
        <h6>${users[currentUser].displayName}</h6> <p class="username-tweet">${users[currentUser].userName}</p> <p class="time-of-tweet">∙${calculateTime(users[currentUser].tweets[i].timestamp)}</p>
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
} else {
    for(var i = 0; i<sortedTweets.length; i++) {
        var newTweet = document.createElement("div")
                newTweet.classList.add("tweet")
                newTweet.innerHTML = `<div class="small-avatar-img"><img class="avatar-img-tweet ${sortedTweets[i][5]}" src="${sortedTweets[i][2]}" alt=""></div>
                <div class="tweet-data">
                    <h6 class="user ${sortedTweets[i][5]}">${sortedTweets[i][4]}</h6> <p class="username-tweet">${sortedTweets[i][3]}</p> <p class="time-of-tweet">∙${calculateTime(sortedTweets[i][1])}</p>
                    <p class="tweet-text">${sortedTweets[i][0]}</p>
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

}

[...document.querySelectorAll(".user")].forEach(function(item) {
    item.addEventListener("click", function(){
        // console.log(item.querySelector(".user").classList[1]);
        window.open(`index.html?user=${item.classList[1]}`)
    })
});


[...document.querySelectorAll(".avatar-img-tweet")].forEach(function(item) {
    item.addEventListener("click", function(){
        // console.log(item.querySelector(".user").classList[1]);
        window.open(`index.html?user=${item.classList[1]}`)
    })
})














