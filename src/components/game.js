import React, { useState } from "react"

const Game =()=>{

    const [image,setImage] =useState();
    const [compImage,setCompImage]=useState();
    const [result,setResult]= useState();

    const data =[
        { 
        "name":'Rock',
        "img":'https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/rock.png'
        },{
        "name":'Paper',
        "img":'https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/paper.png'
        },{
        "name":'Scissors',
        "img":'https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/scissors.png'
        }
    ]
    
    return(
        
        <>
        <div className="main-content">
            <div className="data">
                <h1>Rock-Paper-Scissors Game</h1>
                <hr />
            <div className="image">
                <div className="manual">
                    <h2>Your Choice</h2>
                    <img src={image} />
                </div>
                <div className="com">
                    <h2>Computer Choice</h2>
                    <img src={compImage} />
                </div>
            </div>
            <div className="result">
                <h1>{result}</h1>
            </div> 
                
                <div className="button">
                {
                    data.map((name,i)=>{

                const handleClick=(i)=>{
                    const src = data[i].img;
                    const ran = Math.floor(Math.random()*data.length);
                    const computer = data[ran].img;
                    if ((i ===0 && ran === 0) ||(i ===1 && ran === 1)||(i ===2 && ran === 2) ) {
                            setResult("Draw");}
                    else if((i ===0 && ran === 1)||(i ===1 && ran === 2) ||(i ===2 && ran === 0)){
                            setResult("Computer Wins");}
                    else if ((i ===0 && ran === 2)|| (i ===1 && ran === 0)||(i ===2 && ran === 1)){
                        setResult("You Win");}
                            
                     
                
                    setImage(src);
                    setCompImage(computer)
                        }
                        return(
                            <>
                            <div key={i}><button  onClick={()=>{handleClick(i);}}>{name.name}</button></div>
                            
                            </>
                        )
                    })
                }

                </div>
                
                
            </div>
        </div>
        
        </>
    )
}


export default Game;