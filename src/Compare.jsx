import React, { useState } from 'react';
import './styles/Match.scss';

function Compare(){
    let tempArray = [];
    let array = [];
    let winArray = [];
    const [answerArray, setAnswerArray] = useState([]);
    const [answer, setAnswer] = useState({
      num0: null,
      num1: null,
      num2: null,
      num3: null
    });
    const [winningNumbers, setWinningNumbers] = useState({
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

      const initialWinningNumbers = winningNumbers;
      for(let i = 0; i < 4; i++){
        let num = `num${i}`;
        winArray.push(<input onChange={handleWinningSubmit} key={i} name={num} type="number" />)
      }

      // -------------------------- TAKE IN USER NUMBERS ------------------ //
    function handleSubmit(event){
      console.log('IN HANDLE SUBMIT', event.target.name)
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
// -------------------------- TAKE IN WINNING NUMBERS ------------------ //
    function handleWinningSubmit(event){
      console.log('IN WINNING SUBMIT', event.target.name)
      event.preventDefault();
      const {name, value} = event.target;
      setWinningNumbers(prevValue =>{
        for (let i = 0; i < 20; i++){
         setWinningNumbers({
           ...prevValue,
           [name] : value
          })
        }
      })
    }

    const renderAnswers = async () => {
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
          await setAnswerArray(prevArray => [...prevArray, tempArray]);
          tempArray = [];
        }
        // ------------------------ RESET STATE -------------------- //
        function renderReset(){
          setAnswerArray([]);
          setAnswer(initialAnswer);
      }


    return (

      <div id="match">
        <section className="all-sections">
        <h2 id="match-title">Compare</h2>
        <h2 id="match-title">MATCH4</h2>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{ width: '300px'}}>
          <h4>Your Numbers</h4>
          <form name="form">
          {array}
          </form>
          </div>
          <div style={{ width: '300px'}}>
          <h4>Winning Numbers</h4>
          <form name="form">
          {winArray}
          </form>
          </div>
        </div>

        <button type="submit" name="reset" onClick={renderReset}>Reset</button>
        <button type="submit" onClick={renderAnswers}>Click</button>
        </section>
        <div id="matchRows">
        <ol>
          {answerArray.map((each, index) => <li key={index} style={styles.list}> {`${each}`}</li>)}
         </ol>
         </div>
      </div>
    )
  }

  const styles = {
    list: {
      backgroundColor: 'white',
      fontSize: '2em',
      color: 'black',
      marginBottom: '10px',
    }
  }

export default Compare;