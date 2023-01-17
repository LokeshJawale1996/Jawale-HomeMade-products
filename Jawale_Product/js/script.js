


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
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    // This function returns a promise which creates a new image (use document.createElement('img'))

    const img = document.createElement('img');
    // and sets the .src attribute to the provided image path.

    img.src = imgPath;

    //append it to the DOM element with the 'images' class and resolve the promise
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    //In case there is an error loading the image ('error' event), reject the promise.
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

setInterval(function () {}, 1000);


createImage('./images/bibde.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    //After the image has loaded, pause execution for 2 seconds using the wait function
    // return wait(2);
    //After the 2 seconds have passed,
  })
  // .then(() => {s
  //   //hide the current image (set display to 'none'),
  //   currentImg.style.display = 'none';
  //   return createImage('./images/kurdai2.png');
  // })
  // .then(img2 => {
  //   currentImg = img2;

  //   console.log('Image 2 loaded');
  //   return wait(2);
  // })
  // .then(() => {
  //   currentImg.style.display = 'none';
  //   return createImage('./images/papdj.png');
  // })
  // .then(img3 => {
  //   currentImg = img3;

  //   console.log('Image 3 loaded');
  //   return ;
  // })
 .catch(err => console.error(err));


//  About us

// aboutClick.addEventListener('click',function(){

//   if(about.classList.contains('hidden')){
//     about.classList.remove('hidden');
//     heroCont.classList.add("hidden");
//     statsCont.classList.add("hidden");
//     fetauresCont.classList.add("hidden");
//     ctaCont.classList.add("hidden");
//     imgContainer.classList.add("hidden")
//     console.log("about btn clicked");
//   }
//   else{
//     about.classList.add('hidden');
//     heroCont.classList.remove("hidden");
//     statsCont.classList.remove("hidden");
//     fetauresCont.classList.remove("hidden");
//     ctaCont.classList.remove("hidden");
//     imgContainer.classList.remove("hidden")
//   }
   

// });
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



// product page
// function navToggle2() {
//   productSec.classList.toggle('open')
//   productSec.classList.toggle('hidden')
// }
// showProduct.addEventListener('click', navToggle2)

// showProduct.addEventListener('click',function(){

//   if(productSec.classList.contains('hidden')){
//     productSec.classList.remove('hidden');
    
//   }else{
//     productSec.classList.add('hidden');
   

//   }
 
  
// })