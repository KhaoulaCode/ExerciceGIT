import React from "react";
import Gambling from "../components/Gambling"
import Bubbles from "../components/Bubbles"
import AskUserName from '../components/AskUserName'
import Settings from "../components/Settings";
import Lost from "../components/Lost.jsx"
import { useSelector } from "react-redux";

const Page = ()=>{
    const nbTries = useSelector((state) => state.settings.nbTries);


    const [isWin, setIsWin] = React.useState(false);
    const [isDisplayBubbles, setIsDisplayBubbles] = React.useState(false);
    const [random, setRandom] = React.useState(Math.round(1 + Math.random() * 99));
    const [tries, setTries] = React.useState(0);


    React.useEffect(()=>{
        setIsDisplayBubbles(true);

        setTimeout(()=>{
            setIsDisplayBubbles(false)
        }, 2500)

    },[tries])

    React.useEffect(()=>{
        setIsDisplayBubbles(true);

        setTimeout(()=>{
            setIsDisplayBubbles(false)
        }, 2500)

    },[tries])
    




    return (
        <>  
            {
                isWin ? <AskUserName tries={tries} setIsWin={setIsWin}/> : ""
            } 
            <Settings/>
            <Gambling 
                random={random}
                tries={tries}
                setTries={setTries} 
                setIsWin={setIsWin} 
                />

            {
                isDisplayBubbles ? <Bubbles isWin={isWin} tries={tries} /> : ""
            }
            {
                isWin ? <AskUserName tries={tries} setIsWin={setIsWin}/> : ""
            }
            {
                nbTries <= tries ? <Lost/> : ""
            }
        </>
    )
}

export default Page