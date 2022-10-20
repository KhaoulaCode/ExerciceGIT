
import initControllers from "./Controllers/controller.js"
import logic from "./Models/gamblingModel.js"
import scoreBoard from "./Models/scoreBoardModel.js"


window.addEventListener("load", ()=>{
    scoreBoard.init();
    initControllers();
    logic.init();
})