import React, { useRef, useState } from "react";
import "./Keno.scss";

function Keno() {
  let tempArray = [];
  let array = [];
  const [answerArray, setAnswerArray] = useState([]);
  const [answer, setAnswer] = useState({});
  const initialAnswer = useRef(answer);

  for (let i = 0; i < 20; i++) {
    let num = `num${i}`;
    array.push(
      <input onChange={handleSubmit} key={i} name={num} type="number" />
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setAnswer((prevValue) => {
      for (let i = 0; i < 20; i++) {
        setAnswer({
          ...prevValue,
          [name]: value,
        });
      }
    });
  }

  function renderAnswers() {
    let array = [];
    for (let i = 0; i < 81; i++) {
      array.push(i);
    }

    let temp = 0;
    for (const prop in answer) {
      if (answer[prop] === null) {
        let x = Math.floor(Math.random() * (array.length - 1) + 1);
        x = array[x];
        tempArray.push(x);
        array.splice(x, 1);
      } else {
        let num = parseInt(answer[prop]);
        let a = num - 2;
        let b = num + 4;
        let j = Math.floor(Math.random() * (b - a) + a);
        j = j - temp;
        if (j <= 0) {
          j = 1;
        }
        let x = array[j];
        if (x === undefined) {
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

  function renderReset() {
    setAnswerArray([]);
    setAnswer(initialAnswer);
    document.getElementById("keno-form").reset();
  }
  return (
    <div id="keno">
      <section className="all-sections">
        <h2 id="keno-title">KENO</h2>
        <form id="keno-form">{array}</form>
        <br></br>
        <button type="submit" name="reset" onClick={renderReset}>
          Reset
        </button>
        <button type="submit" onClick={renderAnswers}>
          Generate
        </button>
      </section>
      <div id="kenoRows">
        <div>
          {answerArray.map((each, idx) => (
            <ol style={styles.list}>
              <p style={styles.number}>{idx + 1}</p>
              {each.map((num, index) => (
                <li key={index} className="answer-list">
                  {num}
                </li>
              ))}
            </ol>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  list: {
    marginBottom: "30px",
  },
  number: {
    marginBottom: "10px",
    fontSize: "2em",
    width: "90%",
    margin: "auto",
    textDecoration: "underline",
    color: "black",
  },
};

export default Keno;
