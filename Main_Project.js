const button = document.getElementById("toggletheme");
button.addEventListener('click', () => {
    document.body.classList.toggle("darkmode");
});

/* HOME PAGE SLIDER */
// let index = 0;
//         function moveSlide(direction) {
//             const slides = document.querySelectorAll(".slide");
//             index += direction;
//             if (index >= slides.length) index = 0;
//             if (index < 0) index = slides.length - 1;
//             document.querySelector(".slider").style.transform = `translateX(-${index * 100}%)`;
// }

const images = document.querySelectorAll('.Hom-image');
images[0].classList.add('active');
setInterval(() => {
  const currentActiveImage = document.querySelector('.Hom-image.active');
  currentActiveImage.classList.remove('active');
  const nextImage = currentActiveImage.nextElementSibling;
  const nextImageToSet = nextImage ? nextImage : images[0];
  nextImageToSet.classList.add('active');
}, 5000);

// ABOUT-US RESUME BTN
const resumebtn = document.getElementById('resumebtn');
resumebtn.addEventListener('click', () => {
  const userName = prompt('Enter Your Name?');
  if (userName !== null) {
    alert('Hello Mr/Miss:  ' + userName);
  } else {
    alert('Aapne input deny kiya hai!');
  }
});


// SKILLS
let imgBx = document.querySelectorAll('.imgBx');
let contentBX = document.querySelectorAll('.Text-contentBx');

for (let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover', function(){
        for (let i=0; i<contentBX.length; i++){
            contentBX[i].className = 'Text-contentBx';
        }
        document.getElementById(this.dataset.id).
        className = 'Text-contentBx active';

        for (let i=0; i<imgBx; i++){
            imgBx[i].className = 'imgBx';
        }
        this.className = 'imgBx active';
    })
}


// back to top button
const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });