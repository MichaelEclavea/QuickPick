import React, { useState } from 'react';
import './styles/Match.scss';

function Match(){
    let tempArray = [];
    let array = [];
    const [answerArray, setAnswerArray] = useState([]);
    const [answer, setAnswer] = useState({
      num0: null,
      num1: null,
      num2: null,
      num3: null
    });

    const initialAnswer = answer;

      for(let i = 0; i < 4; i++){
        let num = `num${i}`;
        array.push(<input onChange={handleSubmit} key={i} name={num} type="number" />)
      }

      // -------------------------- TAKE IN INPUT VALUES ------------------ //
    function handleSubmit(event){
      event.preventDefault();
      const {name, value} = event.target;
      setAnswer(prevValue =>{
        for (let i = 0; i < 20; i++){
         setAnswer({
           ...prevValue,
           [name] : value
          })
        }
      })
    }

    function renderAnswers(){
      let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
      let temp = 0;

      // ------------------- IF USER DOES NOT ENTER IN VALUES ------------------//
        for(const prop in answer){
          if (answer[prop] === null){
            let j = Math.floor(Math.random() * (array.length - 1) + 1);
            j = array[j];
            tempArray.push(j);
            array.splice(j, 1);
          }
          // ---------------- IF USER INPUT VALUES -------------------//
          else {
            let num = parseInt(answer[prop]);
              let a = num - 4;
              let b = num + 5;
              let j = Math.floor(Math.random() * (b - a) + a);
              j = j - temp;
              if(j <= 0){
                j = 1;
              }
              let x = array[j];
              if(x === undefined){
                let lastNum = array.length - temp;
                x = array[lastNum];
              }
              temp++;
              tempArray.push(x);
              array.splice(j, 1); 
            }  
          }
          tempArray.sort((a, b) => a - b);
          setAnswerArray([...answerArray, tempArray]);
          tempArray = [];
        }
        // ------------------------ RESET STATE -------------------- //
        function renderReset(){
          setAnswerArray([]);
          setAnswer(initialAnswer);
          document.getElementById('match-form').reset();
          
      }


    return (

      <div id="match">
        <section className="all-sections">
        <h2 id="match-title">MATCH4</h2>
        <form name="form" id="match-form">
        {array}
        </form>
        <br></br>
        <button type="submit" name="reset" onClick={renderReset}>Reset</button>
        <button type="submit" onClick={renderAnswers}>Click</button>
        </section>
        <div id="matchRows">
        <ol>
          {answerArray.map((items, idx) => ( <>
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
        marginBottom: '15px',
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
export default Match;
