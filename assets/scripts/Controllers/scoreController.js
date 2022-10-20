import scoreBoard from "../Models/scoreBoeard.js"
import gamblingModel from "../Models/gamblingModel.js"
const inputName =  document.querySelector("#name-input")




const init = ()=>{

    inputName.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            scoreBoard.addScore(inputName.value, gamblingModel.getTries());
        }
    });
    
}

export default init;
