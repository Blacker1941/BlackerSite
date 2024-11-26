import React, { useState, useEffect } from 'react';
import './css/app.css';
import NavBar from './components/NavBar-section/NavBar';
import Hero from './components/Hero-section/Hero';
import About from './components/main-section/About-section/About';
import Clinets from './components/main-section/Clients-section/Clinets';
import Features from './components/main-section/Features-secthion/Features';
import {Container,Row,Col} from 'react-bootstrap';
import Services from './components/main-section/Services-section/Services';
import Spinner from 'react-bootstrap/Spinner';
import Cta from './components/main-section/Cta-section/Cta';
import Portfolio from './components/main-section/portfolio-sectiom/portfolio';
import Counts from './components/main-section/Counts-section/counts';




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
              <Row>
                <Col xs={12}>
                  <Cta />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Portfolio />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Counts />
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
