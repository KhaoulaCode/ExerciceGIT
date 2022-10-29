import React from "react";

const Gambling = ({setTries, tries, random, setIsWin})=>{

    const input = React.useRef(null)

    React.useEffect(()=>{
        console.log(random)
    }, [])
    
    const send = (e)=>{
        e.preventDefault();

        parseInt(input.current.value) === random ? setIsWin(true) : setIsWin(false)

        setTries(tries + 1);
    }

    return (<>
                <h1>Gambling game</h1>
                <input type="text" ref={input}
                    onKeyUp={e=>{
                        if (e.key === 'Enter') {
                            send(e)
                        }
                    }}
                />
                <button onClick={e=>send(e)} >
                    Send</button>
            </>)
}

export default Gambling