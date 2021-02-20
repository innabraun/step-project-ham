//SECTION tabs
document.addEventListener("DOMContentLoaded",()=>{

    const tabs=document.querySelectorAll(".tabs-title"),
        tabsContent=document.querySelectorAll(".tab-content"),
        tabsParent=document.querySelector(".tabs");


    tabsParent.addEventListener("click",(event)=>{

        const target=event.target;
        tabs.forEach((item,index)=>{
            item.classList.remove("active")
            tabsContent[index].classList[target.dataset.title === tabsContent[index].dataset.content ? 'add' : 'remove']('active');
        })
        target.classList.add("active");
    })

})


//SECTION AMAZING
let myTitle = document.querySelectorAll(".amazing-elem");
let myContent = document.querySelectorAll(".amazing-img");
let loadMore = document.querySelector(".amazing-button");
let myCurrent;

loadMore.addEventListener("click", () => {
    loadMore.hidden = true;
    let target = document
        .querySelector(".amazing-elem.active")
        .getAttribute("data-target");

    myContent.forEach((event) => {
        if (target === "item-all") {
            event.classList.add("active");
        } else {
            if (event.classList.contains(target)) {
                event.classList.add("active");
            } else event.classList.remove("active");
        }
    });
});

myTitle.forEach(function (item) {
    item.addEventListener("click", (e) => {
        loadMore.hidden = false;
        myTitle.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
        myCurrent = item.getAttribute("data-target");
        changeMyContent(myCurrent);
    })
})

function changeMyContent(myCurrent) {
    let counter = 0;
    myContent.forEach((event) => {
        if (myCurrent ==="item-all") {
            if (counter < 12) {
                event.classList.add("active");
            } else event.classList.remove("active");
            counter++;
        } else {
            if (event.classList.contains(myCurrent)) {
                if (counter < 4) {
                    event.classList.add("active");
                } else event.classList.remove("active");
                counter++;
            } else event.classList.remove("active");
        }
    })
}

//TEAM
let titleOne = document.querySelectorAll(".photo-elem");
let contentElem = document.querySelectorAll(".content-elem ");
let target;

titleOne.forEach(function (elem) {
    elem.addEventListener("click", (e) => {
        titleOne.forEach((elem) => {
            elem.classList.remove("active");
        });
        elem.classList.add("active");
        target = elem.getAttribute("data-target");
        currentElem = target.replace("target-", "");
        currentElem--
        changeContent(target);
    });
});

function changeContent(target) {
    contentElem.forEach((e) => {
        if (e.classList.contains(target)) {
            e.classList.add("active");
        } else e.classList.remove("active");
    });
}

//BUTTON
const slides = document.querySelectorAll(".photo-icons .photo-elem ");
let currentElem = 0;
let buttonBefore = document.querySelector(".photo-before");
let buttonAfter = document.querySelector(".photo-after");


buttonBefore.addEventListener("click",() =>{
    slides[currentElem].className = "photo-elem";
    if (currentElem === 0) {
        currentElem = 3;
        slides[currentElem].className = "photo-elem active";
        target = slides[currentElem].getAttribute("data-target");
        changeContent(target);
    } else {
        currentElem = (currentElem - 1) % slides.length;
        slides[currentElem].className = "photo-elem active";
        target = slides[currentElem].getAttribute("data-target");
        changeContent(target);
    }
})



buttonAfter.addEventListener("click",() =>{
    titleOne.forEach((elem) => {
        elem.classList.remove("active");
    })
    if (currentElem ===4) {
        currentElem = 0;
        slides[currentElem].className = "photo-elem active";
        target = slides[currentElem].getAttribute("data-target");

        changeContent(target);
    } else {
        currentElem++;
        if (currentElem === 4) {
            currentElem = 0;
        }
        slides[currentElem].className = "photo-elem active";
        target = slides[currentElem].getAttribute("data-target");

        changeContent(target);
    }
})



