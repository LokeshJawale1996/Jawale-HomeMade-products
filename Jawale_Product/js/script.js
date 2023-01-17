


const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const imgContainer = document.querySelector('.images');
const aboutClick = document.querySelector('.openAbout');
const abt = document.getElementById('abt');
const hero = document.getElementById('hero');
const cta = document.getElementById('cta');
const features = document.getElementById('features')
const productSec = document.getElementById('product');
const product = document.querySelector('.product');
const showProduct = document.querySelector('showProduct')
// const images = ['./images/papd.png','./images/kurdai2.png','./images/papd2.png'];
// Toggle Mobile Menu

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }
  btn.addEventListener('click', navToggle)


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

///////////////////////////////

//Create a function 'createImage' which receives imgPath as an input.
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     // This function returns a promise which creates a new image (use document.createElement('img'))

//     const img = document.createElement('img');
//     // and sets the .src attribute to the provided image path.

//     img.src = imgPath;

//     //append it to the DOM element with the 'images' class and resolve the promise
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     //In case there is an error loading the image ('error' event), reject the promise.
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// setInterval(function () {}, 1000);


// createImage('./images/bibde.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     //After the image has loaded, pause execution for 2 seconds using the wait function
//     // return wait(2);
//     //After the 2 seconds have passed,
//   })
//   .catch(err => console.error(err));

function currentTime(){
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);


  }
currentTime()



// Temporary close Products section
var tempCloseProducts = document.querySelector(".tempCloseProducts");
    var productsContent = document.querySelector(".prodContent");
    tempCloseProducts.addEventListener("click", function () {
      if (productsContent.classList.contains("hidden")) {
        productsContent.classList.remove("hidden");
      } else {
        productsContent.classList.add("hidden");
      }
    });

    // Temporary close Features section
    var tempCloseFeatures = document.querySelector(".tempCloseFeatures");
    var featuresContent = document.querySelector(".featuresContent");
    tempCloseFeatures.addEventListener("click", function () {
      if (featuresContent.classList.contains("hidden")) {
        featuresContent.classList.remove("hidden");
      } else {
        featuresContent.classList.add("hidden");
      }
    });

    // Temperary close about section
    var tempCloseAbout = document.querySelector(".tempCloseAbout");
    var aboutContent = document.querySelector(".aboutContent");
    tempCloseAbout.addEventListener("click", function () {
      if (aboutContent.classList.contains("hidden")) {
        aboutContent.classList.remove("hidden");
      } else {
        aboutContent.classList.add("hidden");
      }
    });

    // showing date and day on screen
    var date1= document.querySelector('.date');
    var day1= document.querySelector('.day');

    const date = new Date()

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.

var a = new Date();
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var r = weekdays[a.getDay()];

  let currentDate = `${day}-${month}-${year}`;

  r = r.slice(0,3);
date1.innerHTML=currentDate;
day1.innerHTML= r;