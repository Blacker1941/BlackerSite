import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/app.css';
import NavBar from './components/navBar-section/NavBar';
import Hero from './components/hero-section/Hero';
import About from './components/main-section/About-section/About';
import Clinets from './components/main-section/Clients-section/Clinets';
import Features from './components/main-section/features-secthion/Features';
import {Container,Row,Col} from 'react-bootstrap';
import Services from './components/main-section/services-section/Services';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="App">
      {!isLoaded ? (
        <header className="App-header">
          <Spinner animation="border" variant="warning" />
          <p>loading <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /></p>
        </header>
      ) : (
        <div className="loading-screen">
          <NavBar />
          <Hero />
          <main>
            <Container>
              <Row>
                <Col xs={12} >
                  <About />
                </Col>
                <Col xs={12}>
                  <Clinets />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Features />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Services />
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
