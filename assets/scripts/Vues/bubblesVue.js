


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

    }

    setTimeout(()=>{
        const bubbles =  document.querySelectorAll(".bubble");

        bubbles.forEach((bubble)=>{
            document.querySelector("body").removeChild(bubble)    
        })

    },2000)
    
}




export default displayBubbles;