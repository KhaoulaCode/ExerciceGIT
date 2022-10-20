import tryModel from "../Models/tryModel.js"
import displayBubbles from "../Vues/bubblesVue.js"
const init = ()=>{
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    input.addEventListener("change", ()=>{
        tryModel.setValue(parseInt(input.value))
    })
    button.addEventListener("click", ()=>{
        const value = tryModel.getValue();
        console.log(value);
        tryModel.addTries()
        tryModel.isEquals(value) ? displayBubbles(true, tryModel.isGreaterThan(value)) : displayBubbles(false, tryModel.isGreaterThan(value));
    })
}

export default init;