
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