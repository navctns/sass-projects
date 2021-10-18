
function toggleNavbar(e){
    console.log('event', e.target, e.target.classList)
    //add open class
    if(e.target.classList.contains("open")){//close navbar
        e.target.classList.remove("open")
    }else{//open navbar
        e.target.classList.add("open");
    }
    
}