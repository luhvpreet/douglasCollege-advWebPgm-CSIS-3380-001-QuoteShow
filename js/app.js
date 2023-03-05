var quotes = data;

function createSlides(allquotes) {
  var allSlides = '';

  for (i = 0; i < allquotes.length; i++) {
    allSlides += `<div class="mySlides" onclick="showSlides(Math.floor(Math.random()*quotes.length))">
    <p>${allquotes[i].quote}</p>
    </div>`;
  }
  allSlides += `
  <div class="mySlidesImg">
    <img src="./images/img2.jpg">
    </div>
    <div>
    <p class="author">― Charlie Mackesy, <a href="https://www.goodreads.com/book/show/43708884-the-boy-the-mole-the-fox-and-the-horse">The Boy, the Mole, the Fox and the Horse</a></p>
    </div>`;
  return allSlides;
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');

  console.log(slides.length);
  console.log('n =' + n);

  slideIndex = n;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  console.log('slideIndex = ' + slideIndex);
  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

const slideLocation = document.getElementsByClassName('slideshow-container');

const allslides = createSlides(quotes);

slideLocation[0].innerHTML = allslides;

var slideIndex = 1;

showSlides(slideIndex);

var slides = document.getElementsByClassName('mySlides');