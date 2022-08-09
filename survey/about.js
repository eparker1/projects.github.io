// the nav bar
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const one = document.querySelector(".one");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const nth = document.querySelector(".nth");

navbar.addEventListener("click", () =>{
    navbar.classList.toggle("active");
    nav.classList.toggle("nav-active");
    one.classList.toggle("one1"); 
    three.classList.toggle("three1"); 
    four.classList.toggle("four1"); 
    five.classList.toggle("five1"); 
    nth.classList.toggle("nth1"); 

})

// IntersectionObserver

const horizontal_line = document.querySelector("hr");
const number = document.querySelector(".number");

const callbackfunction = function(entries){
    entries.forEach(entry =>{
        if (entry.isIntersecting == false){
            entry.target.classList.add("hr_disappear");
        }else if (entry.isIntersecting == true) {
            entry.target.classList.remove("hr_disappear");
        }
    })
    
}

const observer = new IntersectionObserver(callbackfunction, {
    threshold: 0,
    rootMargin: '-53px 0px 0px 0px'

});

observer.observe(horizontal_line);

const head = document.querySelector("#head2");
const menu = document.querySelector(".menu-items");
const items = document.querySelectorAll(".nav-items");
const items6 = document.querySelector(".nth");
const icon = document.querySelector(".icon");
const bar = document.querySelectorAll(".bar");
const menu2 = document.querySelector(".menu2");

const callback2function = function(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting == false){
            menu.classList.add("menu-items_show");
            items.forEach(item => {
                item.classList.remove("nav-items")
                item.classList.add("nav-items_show")
            })
            bar.forEach(item => {
                item.style.backgroundColor = "rgb(107, 0, 62)";
            })
            items6.classList.remove("nav-items_show");
            items6.classList.add("nth_show");
            icon.src = "./images/ICON-PURPLE.png";
        }else if (entry.isIntersecting == true){
            menu.classList.remove("menu-items_show");
            items.forEach(item => {
                item.classList.remove("nav-items_show")
                item.classList.add("nav-items")
            })
            bar.forEach(item => {
                item.style.backgroundColor = "white";
            })
            icon.src = "SURVEY AND CONSTRUCTION INC..png";

        }
    })
}

const observer2 = new IntersectionObserver(callback2function, {
    threshold: 0.9,
    rootMargin: '-150px 0px 0px 0px'
})
 

observer2.observe(menu2);

//the reasons section
const reasons_head = document.querySelector(".reasons-head");
const footer_head = document.querySelector(".footer-head");

const callback3function = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("reasons-head_appear");
            observer.unobserve(entry.target);

        } else{
            return;
        }
        
    })
}

const observe3 = new IntersectionObserver(callback3function, {
    rootMargin: '0px',
})

observe3.observe(reasons_head);
observe3.observe(footer_head);