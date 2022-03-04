
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

// Projects

// external js: isotope.pkgd.js


// init Isotope
var gridItem = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    gridItem.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    gridItem.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
  