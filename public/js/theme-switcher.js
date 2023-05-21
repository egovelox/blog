const themeSwitch = document.getElementById("switch-btn");
let body = document.querySelector("body")
let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
sun.style.display = "none"


let theme = sessionStorage.getItem("theme");
if (theme == undefined) {
  sessionStorage.setItem("theme", "dark");
  theme = sessionStorage.getItem("theme");
} 

updateElements(theme)

themeSwitch.addEventListener("click", (_) => {

  let theme = sessionStorage.getItem("theme")

  if (theme == 'dark') {
    sessionStorage.setItem("theme", "light")
    theme = sessionStorage.getItem("theme")
  } else {
    sessionStorage.setItem("theme", "dark")
    theme = sessionStorage.getItem("theme")
  }

  updateElements(theme)

})

function updateElements(theme) {

  const lightGray = "rgb(175, 184, 165)"
  const darkGray = "rgb(51, 51, 51)"
  const black = "rgb(0,0,0)"
  
  // the body for non-posts page
  body.style.backgroundColor = theme == 'dark' ? darkGray : lightGray 
  body.style.color = theme != 'dark' ? black : lightGray 
  
  // the markdown body for posts-pages
  let postBody = document.querySelector(".markdown-body")
  if (postBody != undefined) {
    postBody.style.color = theme != 'dark' ? black : lightGray
  }
  
  if( theme != 'dark') {
    // the switch button must be checked
    themeSwitch.checked = true
  
    // the moon must be invisible, the sun visible
    moon.style.display = "none"
    sun.style.display = "block" 
  }
  else {
    sun.style.display = "none"
    moon.style.display = "block"  
  }
}
