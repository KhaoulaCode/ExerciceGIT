import React from "react";

const Bubbles = ({isWin, tries})=>{

    const [arr, setArr] = React.useState([])

    React.useEffect(()=>{
        //Si pas premier chargement
        const win = ["Bravo 🎉", "Bravo 🎉", "Bravo 🎉", "Bravo 🎉", "Bravo 🎉"]
        const lose = ["Dommage 😞", "Dommage 😞", "Dommage 😞", "Dommage 😞", "Dommage 😞"]
        if (tries>0){
            isWin ? setArr(win) : setArr(lose)
        }

    },[tries])

    return <>
            {
                arr.map((text, i)=>{
                    return <div key={i} className={`bubble ${isWin ? "blue" : "red"}`}>{text}</div>
                })
            }
            </>
}

export default Bubbles