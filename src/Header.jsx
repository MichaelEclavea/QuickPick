import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

function Header() {
  const [seconds, setSeconds] = useState(0)
  const [date, setDate] = useState(0)
  const [headerColor, setHeaderColor] = useState('#f2f6f5')
  const [textColor, setTextColor] = useState('#056676')

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString())
      setSeconds(new Date().toLocaleTimeString())
    }, 1000)
  }, [date, seconds])

  function setColor(event) {
    const { name } = event.target;
    switch (name) {
      case 'pick3':
        setHeaderColor('#00bcab');
        setTextColor('white');
        break;
      case 'hit5':
        setHeaderColor('#ff6c2c');
        setTextColor('white');
        break;
      case 'keno':
        setHeaderColor('#fb992b');
        setTextColor('white');
        break;
      case 'match4':
        setHeaderColor('#0192d5');
        setTextColor('white');
        break;
      case 'Home':
        setHeaderColor('#f2f6f5');
        setTextColor('#056676');
        break;
      case 'custom':
        setHeaderColor('#f2f6f5');
        setTextColor('#056676');
        break;
      default:
        break;
    }
  }

  function openTab(event) {
    const { title } = event.target;
    if (title === 'Washington Lottery') {
      window.open('https://www.walottery.com/');
    }
    if (title === 'GitHub') {
      window.open('https://github.com/MichaelEclavea');
    }
  }

  return (
    <header
      style={{backgroundColor: headerColor, color: textColor, margin: 'auto'}}
    >
      <div id="main-links" style={{marginBottom: '40px'}}>
        <Navbar className="colorNav" variant="dark">
          <Navbar.Brand href="/" onClick={setColor} name="home">
            MyQuickPick
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              title="GitHub"
              onClick={openTab}
              style={{marginLeft: '15px'}}
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              href="mailto:mikesOwn671@gmail.com"
              onClick={openTab}
              title="Email"
              style={{marginLeft: '15px'}}
            >
              Email
            </Nav.Link>
            <Nav.Link
              onClick={openTab}
              title="Washington Lottery"
              style={{marginLeft: '15px'}}
            >
              WA Lottery
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div style={{display: 'block'}}>
        <h1 id="main-title">MyQuickPick</h1>
        <h2 id="choose">Lottery Number Generator</h2>
        <h3 id="date">
          {date} {seconds} (PST)
        </h3>
      </div>
      <nav>
        <ul id="component-links">
          <li>
            <Link to="/match4">
              <Button
                onClick={setColor}
                name="match4"
                className="component-link"
              >
                MATCH4
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/keno">
              <Button onClick={setColor} name="keno" className="component-link">
                KENO
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/pick3">
              <Button
                onClick={setColor}
                name="pick3"
                className="component-link"
              >
                PICK3
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/hit5">
              <Button onClick={setColor} name="hit5" className="component-link">
                HIT5
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/hit5">
              <Button
                onClick={setColor}
                name="custom"
                to="/custom"
                className="component-link"
              >
                How To Play
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
