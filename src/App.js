import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './secHero/hero';

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
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      )}
    </div>
  );
}

export default App;
