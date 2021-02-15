import React, {useState} from 'react';
import './styles/Pick.scss'

function Pick(){
    let tempArray = [];
    let array = [];
    const [pick, setPick] = useState({
        num0: null,
        num1: null,
        num2: null
    });
    const [answers, setAnswers] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        const {name, value} = event.target;
       setPick(prevValue=>{
           for(let i = 0; i < 3; i++){
               setPick({
                   ...prevValue,
                   [name]: value
               })
           }
       })
    }

    function handleClick(){
        const pickArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for(const prop in pick){
            if(pick[prop] === null){
                let x = Math.floor(Math.random() * (pickArray.length - 1) + 1);
                x = pickArray[x];
                tempArray.push(x);
            }else {
                let num = parseInt(pick[prop])
                console.log('blank pick', num);
                let a = num - 2;
                if(a < 1){
                  a = 0;
                }
                let b = num + 4;
                let x = Math.floor(Math.random() * (b - a) + a);
                console.log('this is x', x);
                x = pickArray[x];
                tempArray.push(x);
            }
             }
        setAnswers([...answers, tempArray.map(each => { return each })])
        console.log(answers);
        tempArray = [];
    }


    function handleReset(){
       setAnswers([])
       document.getElementById('pick-form').reset();
    }

    for(let i = 0; i < 3; i++){
        let num = `num${i}`;
        array.push(<input onChange={handleSubmit} key={i} name={num} type="number"/>)
      }

    return(
        <div>
        <section  className="all-sections">
            <h2 className="game-title" id="pick3-title">PICK3</h2>
            <form id="pick-form">
            {array}
            </form>
            <br></br>
            <div id="pick-button">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClick}>Click</button>
            </div>
            </section>
            <div id="pickRows">
            <ol id="pickOl">
            {answers.map((items, idx) => ( <>
          <p style={styles.number}>{idx + 1}</p>  
          {items.map((each, index) => <li key={index} className="answer-list" style={styles.list}>{each}</li>)}
          </>
          ))}
            </ol>
            </div>
        </div>
    )
}

const styles = {
    list: {
        marginBottom: '10px',
    },
    number: {
      marginBottom: '10px',
      fontSize: '2em',
      width: '90%',
      margin: 'auto',
      textDecoration: 'underline',
      color: 'black',
    }
}

export default Pick;
