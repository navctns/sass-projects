
const toggleBtn = document.querySelector('.header__toggle');
const headerNav = document.querySelector('#header-nav');
const headerEl = document.querySelector('.header');

toggleBtn.addEventListener('click', function(){
    if(headerEl.classList.contains('open')){
        //close navbar
        headerEl.classList.remove('open')
    }else{
        headerEl.classList.add('open')
    }
})
function toggleNavbar(e){
    // e.preventDefault();
    console.log('event', e.target,e.target.parentElement, e.target.classList)
    //add open class
    if(e.target.parentElement.classList.contains("open")){//close navbar
        e.target.parentElement.classList.remove("open")
    }else{//open navbar
        e.target.parentElement.classList.add("open");
    }
    
}

//Slider
//Global 
// var activeImgIdx = 0;

// //Local Var
// var showcaseArea = document.querySelector('.showcase-area');
// //Global
// var showcaseImages = showcaseArea.getElementsByTagName('img');
// // console.log('shocase images', showcaseImages);

// var imgCount = showcaseImages.length;

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// //Hide all other images
// for (let i=0; i<showcaseImages.length;i++){
//     console.log(showcaseImages[i]);
//     if(i !== activeImgIdx){
//         // console.log('hide', element);
//         showcaseImages[i].style.display = 'none';
//     }
// }

// nextBtn.addEventListener('click', ()=>{
//     // console.log('event occurs', activeImgIdx, showcaseImages, typeof  (showcaseImages));    
//     if(activeImgIdx < imgCount){
//         //hide current image
//         activeImgIdx = activeImgIdx % (imgCount -1) + 1;
//         console.log('active-idx', activeImgIdx);
//         //hide other images
//         for (let i=0; i<showcaseImages.length;i++){
//             // console.log(showcaseImages[i]);
//             if(i !== activeImgIdx){
//                 // console.log('hide', element);
//                 showcaseImages[i].style.display = 'none';
//             }
//         }
//         showcaseImages[activeImgIdx].style.display = 'block';
        
//     }
// })

// prevBtn.addEventListener('click', ()=>{
//     // console.log('event occurs', activeImgIdx, showcaseImages, typeof  (showcaseImages));    
//     if(activeImgIdx > -1){
//         //hide current image
//         activeImgIdx = activeImgIdx % (imgCount -1) + 1;
//         console.log('active-idx', activeImgIdx);
//         //hide other images
//         for (let i=0; i<showcaseImages.length;i++){
//             // console.log(showcaseImages[i]);
//             if(i !== activeImgIdx){
//                 // console.log('hide', element);
//                 showcaseImages[i].style.display = 'none';
//             }
//         }
//         showcaseImages[activeImgIdx].style.display = 'block';
        
//     }
// })