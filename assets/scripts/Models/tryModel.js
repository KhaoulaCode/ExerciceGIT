
let random = 0;
let tries = 0
let value = 0;




const init = ()=>{
    random = Math.round(1 + Math.random() * 99);
    console.log(random)
}
const addTries = ()=>{
    tries++;
    console.log(tries);
}

const setValue = (v)=>{
    value = v;
}
const getValue = ()=>{
    return value;
}
const isEquals = (userValue)=>{
    return userValue === random
}

const isGreaterThan = (userValue) => { 
    return userValue < random
}

export default { init, isEquals, setValue, getValue, addTries, isGreaterThan }

