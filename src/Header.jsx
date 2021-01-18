import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

function Header (){
    const [seconds, setSeconds] = useState(0);
    const [date, setDate] = useState(0);
    const [headerColor, setHeaderColor] = useState('#f2f6f5');
    const [textColor, setTextColor] = useState('#056676');

    useEffect(() =>{
      setInterval(()=>{
        setDate(new Date().toLocaleDateString())
        setSeconds(new Date().toLocaleTimeString())
      }, 1000)
    }, [date, seconds]);


    function setColor(event){
      const {name, title} = event.target;
      if(name === 'pick3'){
        setHeaderColor('#00bcab');
        setTextColor('white');
      }
      if(name === 'hit5'){
        setHeaderColor('#ff6c2c');
        setTextColor('white');
      }
      if(name === 'keno'){
        setHeaderColor('#fb992b');
        setTextColor('white');
      }
      if(name === 'match4'){
        setHeaderColor('#0192d5');
        setTextColor('white');
      }
      if(title === 'Home'){
        setHeaderColor('#f2f6f5');
        setTextColor('#056676');
      }
      if(name === 'custom'){
        setHeaderColor('#f2f6f5');
        setTextColor('#056676');
      }
    }

    function openTab(event){
      const { title } = event.target;
      if(title === 'Washington Lottery'){ 
        window.open('https://www.walottery.com/');
      }
      if(title === 'GitHub'){
        window.open('https://github.com/MichaelEclavea');
      }
    }

        return(
            <header style={{ backgroundColor: headerColor, color: textColor, margin: 'auto'}}>
            <div id='main-links' style={{ display: 'block'}}>

            <section style={{ display: 'inline-block', textAlign: 'center'}}>
             <Link to="/" className="main-link"><i  onClick={setColor} name="home" id="icon" className="fas fa-home" title="Home"></i></Link> 
             <p>Home</p>
             </section>

            <section style={{ display: 'inline-block', textAlign: 'center', alignContent: 'center'}}>
            <i onClick={openTab} id="icon" className="fab fa-github" title="GitHub" style={{ textAlign: 'center'}}></i>
            <p>GitHub</p>
            </section>

            <section style={{ display: 'inline-block', textAlign: 'center'}}>
            <a href="mailto:mikesOwn671@gmail.com"><i  onClick={openTab} id="icon" className="far fa-paper-plane" title="Email"></i></a>
            <p>Email</p>
            </section>

            <section style={{ display: 'inline-block', textAlign: 'center'}}>
            <i class="fas fa-mountain" onClick={openTab} id="icon" title="Washington Lottery"></i>
            <p>WA-Lotto</p>
            </section>

            </div>
            <div style={{ display: 'block'}}>
            <h1 id="main-title">MyQuickPick</h1>
            <h2  id="choose">Lottery Number Generator</h2>
            <h2 id="date">{date} {seconds} (PST)</h2>
            </div>
         <nav>
          <ul id='component-links'>
   
            <li>
              <Link onClick={setColor} name="match4" to="/match4" className="component-link">MATCH4</Link>
            </li>
            <li>
                <Link onClick={setColor} name="keno" to="/keno" className="component-link">KENO</Link>
            </li>
            <li>
              <Link onClick={setColor} name="pick3" to="/pick3" className="component-link" >PICK3</Link>
            </li>
            <li>
              <Link onClick={setColor} name="hit5" to="/hit5" className="component-link">HIT5</Link>
            </li>
            <li>
              <Link onClick={setColor} name="compare" to="/compare"  className="component-link">Compare</Link>
            </li>
            <li>
              <Link onClick={setColor} name="howtoplay" to="/howtoplay"  className="component-link">How To Play</Link>
            </li>
          </ul>
        </nav>
        </header>
        );
    }

export default Header;