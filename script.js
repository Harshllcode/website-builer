function v(views) {
    if (views < 1000) {
        return views.toString();
    }
    else if (views >= 1000 && views < 1000000) {
        return views / 1000 + "K";
    }
    else if (views >= 1000000 && views < 1000000000) {
        return Math.floor(views / 1000000) + "M";
    }
    else {
        return Math.floor(views / 1000000000) + "B"
    }
}


function insertcard(title, channelname, views, timeago, img, duration) {
    let element = document.createElement("div");
    element.setAttribute("class", "container")
    let card = `<div class="img">
            <img src="${img}" alt=""></img>
                <span class="time">${duration}</span>
            </div>
            <div class="content-text">
                <div class="title">${title}</div>
                <div class="sub-head">
                    <div class="cname">${channelname}</div>
                    <div class="dot"> • </div>
                    <div class="view">${views}<div class="view1">views</div>
                    </div>
                    <div class="dot"> • </div>
                    <div class="date">${timeago}<div class="date1">ago</div>
                    </div>
                </div>
            </div>`;
    element.innerHTML = card
    document.getElementById("list").appendChild(element);
}

insertcard("html and css | Sigma Web Development Course -Tutorial #2", "CodeWithHarry", v(30000), "4 months", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA", "12:54");

insertcard("html tags | Sigma Web Development Course -Tutorial #3", "CodeWithHarry", v(5555600), "11 months", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQ9PuM1Zn58x2U9MLhbV7nPC70NQ", "12:54");
insertcard("html semantic tags| Sigma Web Development Course -Tutorial #4", "CodeWithHarry", v(5555600), "6 months", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQ9PuM1Zn58x2U9MLhbV7nPC70NQ", "12:56");
