const numbers = document.querySelectorAll("input")
const btn = document.getElementById("btn")
const box = document.querySelectorAll(".box")
const result = document.querySelector(".result")
const num = document.querySelectorAll(".num")

btn.addEventListener("click", number)

let total = numbers.length
let selected = ""  

num.forEach((n, index) => { 
  n.addEventListener('click', () => {
    selected = n.id
     n.classList.toggle("active")
     console.log(n)
    })    
    
})
const reload = () =>{
  window.location.reload()
}
function number() {
  box[1].classList.remove("end")
  
  if (selected > 0) {
    return (result.innerHTML += `<h2> You selected ${selected} out of ${total} </h2>`)

  } else {
    return (result.innerHTML += `<h2 style="cursor:pointer"onClick ="reload()">Choose rating!</h2>` )
  }
}