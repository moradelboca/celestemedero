let hamburMenu = document.getElementById("navlist")

document.getElementById("hamburopen").addEventListener("click", ()=>{
  hamburMenu.style["display"] = "flex"
})
document.getElementById("hamburclose").addEventListener("click", ()=>{
  hamburMenu.style["display"] = "none"
})