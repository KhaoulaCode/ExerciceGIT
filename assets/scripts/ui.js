import logic from "./logic.js"
let value = 0;


const displayBubbles = (isWin, isGreater)=>{
    if(!isWin){
        const p = document.querySelector("p");
        p.innerHTML = isGreater ? "Le nombre est plus grand" : "le nombre est plus petit"
    }

    for(let i =0; i<5; i++){

        const div = document.createElement("div");
        div.classList.add("bubble");
        div.classList.add(isWin ? "blue" : "red");
        div.innerHTML =  isWin ? "Bravo 🎉" : "Dommage 😞"
        document.querySelector("body").append(div)
    }


    if(isWin){
        //showForm
    }

    setTimeout(()=>{
        const bubbles =  document.querySelectorAll(".bubble");

        bubbles.forEach((bubble)=>{
            document.querySelector("body").removeChild(bubble)    
        })

    },2000)
    
}

const getUserInput = ()=>{
    return value;
}

const init = ()=>{
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    input.addEventListener("change", ()=>{
        value = parseInt(input.value)
    })
    button.addEventListener("click", ()=>{
        logic.addTries()
        logic.isEquals(value) ? displayBubbles(true, logic.isGreaterThan(value)) : displayBubbles(false, logic.isGreaterThan(value));
    })
}


export default {getUserInput, init, displayBubbles}