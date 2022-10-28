import React from "react";

const AskUserName = ({tries, setIsWin})=>{

    const [winners, setWinners] = React.useState([])
    const [settings, setSettings] = React.useState({
        nbTries : 10,
        nbScores : 10,
        nbChars : 10,
    })
    const [nbWinners, setnbWinners] = React.useState(0) 
    const [wannaRegister, setWannaRegister] = React.useState(false)
    const addScore = (name, tries)=>{
        let isFound = false;

        const newScore = {
            userName : name,
            tries : tries
        }
    
        winners.forEach(user => {
            if(user.userName === name){
                user.tries = tries;
                isFound = true;
            }
        })
        
        if(!isFound && name.length <= settings.nbChars && nbWinners < settings.nbScores){
            winners.push(newScore);
            setnbWinners(nbWinners + 1)
        }
    
        winners.sort((a,b)=>{ return a.tries - b.tries });
        
        localStorage.setItem("winners",  JSON.stringify(winners));
        
    }
    
    
    

    React.useEffect(()=>{
        const winnerString = localStorage.getItem("winners")
        if(!winnerString){
            setWinners([]);
            setnbWinners(0);
        }else{
            try{
                const newList = [];
                const winnerJSON = JSON.parse(winnerString);
                winnerJSON.forEach((el)=>{
                    newList.push({
                        userName: el.userName,
                        tries: el.tries
                    });
                })
                setnbWinners(newList.length)
                setWinners(newList);
            }catch{
                setWinners([]);
                setnbWinners(0);
              }
        }

        const settingsString = localStorage.getItem("settings")

        if(settingsString){
            try{
                let a = JSON.parse(settingsString);
                setSettings(a)

            }catch{
                console.log("impossible de parser")
            }
        }

    },[])

    React.useEffect(()=>{
        console.log(nbWinners)
    },[nbWinners])

        
    return <div className="highscore">
        { 
        !wannaRegister ?  (
            <div id="btns">
                <h2> Voulez vous enregistrer votre score ?</h2>
                <button onClick={e=>{
                    e.preventDefault()
                    setIsWin(false)
                }}>
                    Ne pas enregistrer 
                </button>
                <button onClick={e=>{
                    e.preventDefault()
                    setWannaRegister(true)
                }}>
                    Enregistrer
                </button>
            </div> 
            ) : (    
            <div id="register">
                <h2>Quelle est votre nom honorable vainqueur ?</h2>
                <input type="text" id="name-input" onKeyUp={e=>{
                        e.preventDefault()
                        if (e.key === 'Enter') {
                            addScore(e.target.value, tries);
                        }
                }}/>
                <div className="winner-list">
                    <h3>Liste des vainqueurs :</h3>
                    <ul>
                        {
                            winners.map((w, index)=>{
                                return <li key={index}> {w.userName} | {w.tries}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            )}
        </div>
}

export default AskUserName