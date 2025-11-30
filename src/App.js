import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("");

  const quotes = [
    "Believe in yourself!",
    "Keep pushing forward!",
    "You are doing great!",
    "Success is coming soon!",
    "Every day is a new beginning!"
  ];

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="App">
      <Header />

      <main className="content">
        <section className="card">
          <h2>Counter</h2>
          <p className="counter-value">{count}</p>
          <div className="button-row">
            <button className="btn primary" onClick={() => setCount(count + 1)}>
              Increase
            </button>
            <button className="btn danger" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Motivational Quote ✨</h2>
          <button className="btn success" onClick={generateQuote}>
            Generate Quote
          </button>
          {quote && <p className="quote">"{quote}"</p>}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;


