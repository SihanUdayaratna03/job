import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";
import ProfileCard from "./ProfileCard";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("");

  const quotes = [
    "Welcome to Sihan's WebApp!",
    "Keep pushing forward!",
    "You are doing great!",
    "Success is coming soon!",
    "Every day is a new beginning!",
  ];

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="page">
      <div className="App">
        <Header />

        <main className="content">
          <div className="cards-grid">
            {/* Counter card */}
            <section className="card">
              <h2>Counter</h2>
              <p className="counter-value">{count}</p>
              <div className="button-row">
                <button
                  className="btn primary"
                  onClick={() => setCount(count + 1)}
                >
                  Increase
                </button>
                <button className="btn ghost" onClick={() => setCount(0)}>
                  Reset
                </button>
              </div>
            </section>

            {/* Quote card */}
            <section className="card">
              <h2>Motivational Quote ✨</h2>
              <p className="card-subtitle">
                Click the button to get a random quote.
              </p>
              <button className="btn success" onClick={generateQuote}>
                Generate Quote
              </button>
              {quote && <p className="quote">“{quote}”</p>}
            </section>

            {/* Todo list + Profile */}
            <TodoList />
            <ProfileCard />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;



