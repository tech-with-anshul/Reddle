import React, { useState } from "react";

function App() {
  const [userAnswer, setUserAnswer] = useState("");
  const [currentRiddle, setCurrentRiddle] = useState(0);

  const riddles = [
    { image: "/code1.png", answer: "sun" },
    { image: "/code2.png", answer: "uranium" },
    { image: "/code3.png", answer: "matrix" },
    { image: "/code4.png", answer: "index" }
  ];

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === riddles[currentRiddle].answer) {
      setCurrentRiddle(currentRiddle + 1);
      setUserAnswer("");
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Logo */}
      <img src="/logo.png" alt="Innovators Engineer's Club Logo" style={{ width: "250px" }} />


      {/* Progress Bar */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        {Array.from({ length: riddles.length }, (_, index) => (
            <div
                key={index}
                style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: index <= currentRiddle ? "#0077b6" : "#ccc",
                margin: "0 10px"
                }}
            ></div>
            ))}
      </div>    


      {/* Main Heading */}
      <h1 style={{ color: "#0077b6", margin: "10px 0" }}>
        INNOVATORS ENGINEER'S CLUB
      </h1>

      {/* Subheading */}
      <h3 style={{ color: "#023e8a", marginBottom: "20px" }}>
        Solve 4 riddles and get your key
      </h3>

      {/* Riddle Display */}
      {currentRiddle < riddles.length ? (
        <div>
          <img
            src={riddles[currentRiddle].image}
            alt="Riddle"
            style={{ width: "800px", marginBottom: "100px" }}
          />
          <br />
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px"
            }}
          />
          <button
            onClick={checkAnswer}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#0077b6",
              color: "white",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <h2 style={{ color: "green" }}>🎉 Congratulations! The key character is "<b>x</b>".</h2>
      )}
    </div>
  );
}

export default App;
