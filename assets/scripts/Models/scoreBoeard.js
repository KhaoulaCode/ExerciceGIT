let winners = [];

const init = ()=>{
    console.log("test")
    winners = localStorage.getItem("winners");
    if(!winners){
        winners = [];
    }else{
        try{
            const newList = []
            winners = JSON.parse(winners);
            winners.forEach((el)=>{
                newList.push({
                    userName: el.userName,
                    tries: el.tries
                });
            })
            winners = newList;
        }catch{
            winners = [];
          }
    }
}

const getScores = ()=>{
    return winners
}


const findUser = (name)=>{
    winners.find(u => u.userName === name)
} 


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
    
    if(!isFound){
        winners.push(newScore);
    }

    localStorage.setItem("winners",  JSON.stringify(winners));
    
}






export default {init, getScores, addScore}