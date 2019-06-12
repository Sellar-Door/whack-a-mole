const fields = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrbump = document.querySelectorAll('.mrbump');
let lastField
let timeUp = false;
let score = 0



const randomTime = (min,max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomField = (fields) => {
 const rand = Math.floor(Math.random() * fields.length)
 const field = fields[rand]
 if(field === lastField) {
     randomField(fields)
 }
 lastField = field
 return field
}

const appear = () => {
const time = randomTime(400,1000)
const field = randomField(fields)
field.classList.add("up")
setTimeout(() => {
field.classList.remove("up")
if(!timeUp) appear()
}, time)
}


const startGame = () => {
    timeUp = false;
    score = 0
    appear()
    setTimeout(()=> 
    timeUp = true, 15000)
}

const whack = (e) => {
    console.log(e)
    score++
    this.parentNode.classList.remove("up")
    scoreBoard.textContent = score
}

mrbump.forEach(mrbump => mrbump.addEventListener("click", whack))