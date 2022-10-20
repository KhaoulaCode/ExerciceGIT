import scoreController from "../Controllers/scoreController.js";
import scoreBoardModel from "../Models/scoreBoardModel.js"

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
    refreshList();
}

const refreshList = ()=>{
    const list = document.querySelector(".winner-list ul")
    let lis = "";
    scoreBoardModel.getScores().forEach(user => {
        lis += `<li>nom : ${user.userName} | score : ${user.tries}</li>`;
    });
    list.innerHTML = lis;
}

export default {displayModal, hideModale, askNameModale, refreshList}