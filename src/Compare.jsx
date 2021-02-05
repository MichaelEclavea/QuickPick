import React, { useState } from 'react';
import './styles/Match.scss';


function Compare(){
    let tempArray = [];
    let array = [];
    let winArray = [];
    let runTime = 0; 
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
    // ------------------- COMPARING FUNCTION ------------------//
    const renderAnswers = async () => {
      let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
      let count = 0;
      let compareArray = [];
      let matchArray = [];
      
          await setAnswerArray(prevArray => [...prevArray, tempArray]);
          for(let i = 0; i < compareArray.length; i++){
            console.log('Run Time: ', runTime)
            if(runTime === 2000){ // --------------------- COUNT OF TIMES TO RUN COMPARE ------------//
              alert('❌❌❌-DID NOT FIND A MATCH-❌❌❌');
              break;
            }
            if(compareArray[i] !== tempArray[i]){
              tempArray = [];
              runTime++;
              return renderAnswers();
            }
            if(compareArray[i] === tempArray[i]){
              console.log(compareArray[i], tempArray[i], matchArray);
              matchArray.push('✅');
            } else{
              return (matchArray);
            }
          }
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
        <button type="submit" name="reset" onClick={renderReset}>Reset</button>
        <button type="submit" onClick={renderAnswers}>Click</button>
          </form>
          </div>
        </div>

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