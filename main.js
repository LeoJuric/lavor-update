const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#gore');

gore.style.display = "none";

hamburger.addEventListener("click", (event)=>{
    if (nav.style.display == "none") {
        nav.style.display = "block"
    } else {
        nav.style.display = "none";
    }
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
})

sr.reveal('#prvi')
sr.reveal('.article11', {origin: 'left', delay: 500})
sr.reveal('#usluge')
sr.reveal("#uslugeh3")
sr.reveal('#animacija')
sr.reveal('.article12')
sr.reveal('#galerija')
sr.reveal('.article13')
sr.reveal('#radnovrijeme')
sr.reveal('#logobot', {delay: 400})
sr.reveal('#social', {delay: 600})
sr.reveal('#drugiimg', {delay: 100})


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

$('#drugiimg').click(function() {
    document.getElementById('dash1').beginElement();
})

$('#drugiimg').click(function() {
    document.getElementById('dash2').beginElement();
})

$('#drugiimg').click(function() {
    document.getElementById('dash3').beginElement();
})

var svgLocation = document.getElementById("drugiimg").getBoundingClientRect();
var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;
function scrollAnimTriggerCheck(evt)
{
  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    document.getElementById("dash1").beginElement();
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }

  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    document.getElementById("dash2").beginElement();
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }

  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    document.getElementById("dash3").beginElement();
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }
}

document.addEventListener("scroll", scrollAnimTriggerCheck);


