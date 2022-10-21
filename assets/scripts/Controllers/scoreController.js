import gamblingModel from "../Models/gamblingModel.js"
import scoreBoardVue from "../Vues/scoreBoardVue.js";
import scoreBoardModel from "../Models/scoreBoardModel.js"
const inputName =  document.querySelector("#name-input")




const init = ()=>{

    inputName.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            scoreBoardModel.addScore(inputName.value, gamblingModel.getTries());
            scoreBoardVue.refreshList()
        }
    });
    
}

const displayed = (buttons)=>{
    buttons[0].addEventListener("click", ()=>{
        scoreBoardVue.hideModale();
    })
    buttons[1].addEventListener("click", ()=>{
        scoreBoardVue.askNameModale();
    })

}

export default {init, displayed};
