const numbers = document.querySelectorAll("input")
const btn = document.getElementById("btn")
const box = document.querySelectorAll(".box")
const result = document.querySelector(".result")
const h2 = document.querySelectorAll("h2")
btn.addEventListener("click", number)

let total = numbers.length
let selected = ""
numbers.forEach((n, index) => { 

  n.addEventListener('click', () => {
    selected = n.id

    h2[index].classList.toggle("active")  })
  
})
function number() {
  box[1].classList.remove("end")
  
  if (selected > 0) {
    return (result.innerHTML += `<h2> You selected ${selected} out of ${total} </h2>`)

  } else {
    return
  }
}