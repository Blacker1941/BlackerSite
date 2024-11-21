import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/app.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/secHero/Hero';
import About from './components/main/about/About';
import Clinets from './components/main/clients/Clinets';
import {Col} from 'react-bootstrap'

function App() {
  const [isLoaded, setIsLoaded] = useState(false); // حالت برای مدیریت نمایش محتوای لود شده

  useEffect(() => {
    // تنظیم حالت بعد از لود کامل صفحه
    const handleLoad = () => setIsLoaded(true);

    // بررسی اینکه آیا صفحه از قبل لود شده است
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // پاکسازی رویداد
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="App">
      {!isLoaded ? (
        // صفحه لودینگ اولیه
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            loading
          </p>
        </header>
      ) : (
        // محتوای اصلی که بعد از لود شدن نمایش داده می‌شود
        <div className="loading-screen">
          <Col xs={12}>
          <NavBar></NavBar>
          <Hero></Hero>
          <main>
            <About></About>
            <Clinets></Clinets>
          </main>
          </Col>
        </div>
      )}
    </div>
  );
}

export default App;
