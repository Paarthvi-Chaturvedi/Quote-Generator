import { quotes } from "./quotes.js"

const generateQuote = document.getElementById("generate")
const quoteEl = document.getElementById("quote-el")
const nameEl = document.getElementById("name-el")
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

generateQuote.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteEl.textContent = `"${randomQuote.quote}"`
    nameEl.textContent = `"-by ${randomQuote.author}"`
})


