
import initControllers from "./Controllers/controller.js"
import logic from "./Models/tryModel.js"
import scoreBoard from "./Models/scoreBoeard.js"


window.addEventListener("load", ()=>{
    scoreBoard.init();
    initControllers();
    logic.init();
})