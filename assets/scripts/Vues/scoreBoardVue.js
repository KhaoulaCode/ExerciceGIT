import scoreController from "../Controllers/scoreController.js";

const displayModal = () => {
    const modal = document.querySelector(".highscore")
    modal.style.display = "flex";
    const buttons = document.querySelectorAll(".highscore button")

    scoreController.displayed(buttons)
}

const hideModale = ()=>{
    const modal = document.querySelector(".highscore")
    modal.style.display = "none";
}
const askNameModale = ()=>{
    const btns = document.querySelector("#btns")
    const modal = document.querySelector("#register")
    modal.style.display = "flex";
    btns.style.display = "none";
}

export default {displayModal, hideModale, askNameModale}