let winners = [];

const init = ()=>{
    console.log("test")
    winners = localStorage.getItem("winners");
    if(!winners){
        winners = [];
    }else{
        try{
            const newList = []
            winners = JSON.parse(list);
            winners.forEach((el)=>{
                newList.push(new Note(el.title, el.content));
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

export default {init, getScores}