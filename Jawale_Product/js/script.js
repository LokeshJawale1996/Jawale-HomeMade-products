


const btn = document.getElementById('menu-btn')
const home = document.querySelector('.home');
const menu = document.getElementById('menu')
const imgContainer = document.querySelector('.images');
const aboutClick = document.querySelector('.openAbout');
const about = document.getElementById('about');
const heroCont = document.getElementById('hero');
const statsCont = document.getElementById('stats');
const ctaCont = document.getElementById('cta');
const fetauresCont = document.getElementById('features')



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


createImage('./images/papd.png')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    //After the image has loaded, pause execution for 2 seconds using the wait function
    // return wait(2);
    //After the 2 seconds have passed,
  })
  // .then(() => {
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

 
