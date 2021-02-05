import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
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
            
            <div id='main-links' style={{ marginBottom: '40px'}}>
            <Navbar className="colorNav" variant="dark">
            <Navbar.Brand href="/" onClick={setColor} name="home">Home</Navbar.Brand>
            <Nav className="mr-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link title="GitHub" onClick={openTab} style={{marginLeft: '15px'}}>GitHub</Nav.Link>
            <Nav.Link href="mailto:mikesOwn671@gmail.com" onClick={openTab} title="Email" style={{marginLeft: '15px'}}>Email</Nav.Link>
            <Nav.Link onClick={openTab} title="Washington Lottery" style={{marginLeft: '15px'}}>WA Lottery</Nav.Link>
            </Nav>
            </Navbar>

            </div>
            <div style={{ display: 'block'}}>
            <h1 id="main-title">MyQuickPick</h1>
            <h2 id="choose">Lottery Number Generator</h2>
            <h3 id="date">{date} {seconds} (PST)</h3>
            </div>
         <nav>
          <ul id='component-links'>
   
            <li>
              <Link to="/match4"><button onClick={setColor} name="match4" className="component-link">MATCH4</button></Link>
            </li>
            <li>
                <Link to="/keno"><button onClick={setColor} name="keno" className="component-link">KENO</button></Link>
            </li>
            <li>
              <Link to="/pick3"><button onClick={setColor} name="pick3" className="component-link">PICK3</button></Link>
            </li>
            <li>
              <Link to="/hit5"><button onClick={setColor} name="hit5" className="component-link">HIT5</button></Link>
            </li>
<<<<<<< HEAD
            {/* <li>
              <Link onClick={setColor} name="compare" to="/compare"  className="component-link">Compare</Link>
            </li> */}
            <li>
              <Link onClick={setColor} name="howtoplay" to="/howtoplay"><button  className="component-link">HOW TO PLAY</button></Link>
=======
            <li>
              <Link onClick={setColor} name="custom" to="/custom"  className="component-link">How To Play</Link>
>>>>>>> 353ab951ddb19d7a45e55ebee463275d97a6945d
            </li>
          </ul>
        </nav>
        </header>
        );
    }

export default Header;