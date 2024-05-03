// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var a = document.querySelector(".list")
var fixed = document.querySelector(".fixed-image")

a.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
a.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var id = document.querySelector("#element")
id.addEventListener("mouseenter", function () {
    var image = id.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id2 = document.querySelector("#element2")
id2.addEventListener("mouseenter", function () {
    var image = id2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id3 = document.querySelector("#element3")
id3.addEventListener("mouseenter", function () {
    var image = id3.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id4 = document.querySelector("#element4")
id4.addEventListener("mouseenter", function () {
    var image = id4.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id5 = document.querySelector("#element5")
id5.addEventListener("mouseenter", function () {
    var image = id5.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id6 = document.querySelector("#element6")
id6.addEventListener("mouseenter", function () {
    var image = id6.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
var id7 = document.querySelector("#element7")
id7.addEventListener("mouseenter", function () {
    var image = id7.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})


var image = document.querySelector("#disp")
var changepara = document.querySelector("p")
var firsttext = document.querySelector(".first")
var firstpoint = document.querySelector(".scrollred1")
firsttext.addEventListener("click", function () {
    firsttext.style.color = "white"
    secondtext.style.color = "#504A46"
    thirdtext.style.color = "#504A46"
    firstpoint.style.backgroundColor="red"
    secondpoint.style.backgroundColor = "#504A46"
    thirdpoint.style.backgroundColor = "#504A46"
    changepara.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    image.src="https://images.unsplash.com/photo-1501890055875-40bdc9e4693d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"
})

var secondtext = document.querySelector(".second")
// var pointscroll = document.querySelector(".second::after")
var secondpoint = document.querySelector(".scrollred2")
secondtext.addEventListener("click", function () {
    firsttext.style.color = "#504A46"
    secondtext.style.color = "white"
    thirdtext.style.color = "#504A46"
    firstpoint.style.backgroundColor="#504A46"
    secondpoint.style.backgroundColor = "red"
    thirdpoint.style.backgroundColor = "#504A46"
    changepara.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. "
    image.src="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D"
})

var thirdtext = document.querySelector(".third")
var thirdpoint = document.querySelector(".scrollred3")
thirdtext.addEventListener("click", function () {
    firsttext.style.color = "#504A46"
    secondtext.style.color = "#504A46"
    thirdtext.style.color = "white"
    firstpoint.style.backgroundColor="#504A46"
    secondpoint.style.backgroundColor = "#504A46"
    thirdpoint.style.backgroundColor = "red"
    changepara.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    image.src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMHN0b3JlfGVufDB8fDB8fHww"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });