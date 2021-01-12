console.log("inside theme switcher 2")

const themeSwitch = document.getElementById("switch-btn");
let body = document.querySelector("body")
let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
sun.style.display = "none"

themeSwitch.addEventListener("click", (e) => {

    body.style.backgroundColor = body.style.backgroundColor == "rgb(51, 51, 51)" || body.style.backgroundColor == "" ? "rgb(253, 221, 139)" : "rgb(51, 51, 51)" 
    body.style.color = body.style.color == "rgb(253, 221, 139)" || body.style.color == "" ? "rgb(0, 0, 0)" : "rgb(253, 221, 139)" 

    if(moon.style.display != "none") {
        moon.style.display = "none"
        sun.style.display = "block" 
    }
    else {
        sun.style.display = "none"
        moon.style.display = "block"  
    }

    let postBody = document.querySelector(".markdown-body")
    console.log(postBody.style.color)
    postBody.style.color = postBody.style.color == "rgb(253, 221, 139)" || postBody.style.color == "" ? "rgb(0,0,0)" : "rgb(253, 221, 139)" 
})

/* function switchTheme() {
    
} */