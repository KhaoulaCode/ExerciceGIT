let value = 0;


const displayBubbles = (isWin)=>{
    for(let i =0; i<5; i++){

        const div = document.createElement("div");
        div.classList.add("bubble");
        div.classList.add(isWin ? "blue" : "red");
        div.innerHTML =  isWin ? "Brabo 🎉" : "Dommage 😞"
        
        document.querySelector("body").append(div)
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

    button.addEventListener("click", ()=>{
        value = parseInt(input.value)
    })
}


export default {getUserInput, init, displayBubbles}