let tabs = Array.from(document.querySelectorAll(".stores__tabs ul li"));
let details = Array.from(document.querySelectorAll(".stores__left .stores__details"));
let maps = Array.from(document.querySelectorAll(".stores__right .stores__map"));

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', function () {

    // hide all
    tabs.forEach((tab)=>{
      tab.classList.remove("active")
    });
    details.forEach((detail)=>{
      detail.style.display = "none"
    });
    maps.forEach((map)=>{
      map.style.display = "none"
    });

    // show clicked one
    tab.classList.add("active");
    details[index].style.display = "block";
    maps[index].style.display = "block"; 
    document.querySelector(".stores__left").style.overflow = "auto";
  })
})
