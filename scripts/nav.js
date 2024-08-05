
// ADDING SOME DROPDOWN
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

/*---------------Displaying more photos----------*/

function myFunction(){
    let exploreMore = document.getElementById("explore-more");
    let morePhotos = document.getElementById("more");
    let btnPhoto = document.getElementById("show-more-btn");

    if (exploreMore.style.display === 'none'){
        exploreMore.style.display = "inline";
        btnPhoto.innerHTML = "Show More";
        morePhotos.style.display = "none"
    } else {
        exploreMore.style.display = "none";
        btnPhoto.innerHTML = "Show Less";
        morePhotos.style.display = "grid"
    }
}
