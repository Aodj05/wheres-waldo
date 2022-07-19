import React, { useState, useEffect } from "react";

import axios from "axios";

const GameOverScreen = ({
    currentPhoto,
    photoName,
    ResetGame,
    time,
    buildTimeString,
}) => {
    const [scoreData, setScoreData] = useState([]);
    const [scoreSubmitted, setScoreSubmitted] = useState(false);
    const [submissionErrors, setSubmissionErrors] = useState([]);

    useEffect(() => {
        grabScoreData(currentPhoto);
    }, [scoreSubmitted]);

    function grabScoreData(currentPhoto) {
        axios
          .get(`api/v1/photos/${currentPhoto}/scores`)
          .then((response) => {
            setScoreData(
                response.data.data.map((score) => {
                    return {
                        time: score.attributes.time,
                        initials: score.attributes.initials,
                    };
                })
              );
          })
          .catch((err) => console.log(err));
    }

    function scoreQualifies() {
        return scoreData.length > 0 && time < scoreData.slice(-1)[0].time;
    }

    function calculateRank() {
        let times = scoreData.map((score) => {
            return parseInt(score.time);
        });
        return ((times.concat(time).sort((a, b) => a - b).indexOf(time)) + 1);
    }

    function displayScore(score, index) {
        return (
            <li className="score" key={index}>
              <span className="score-rank">#{index + 1}</span>
              <span className="score-initials">{score.initials}</span>
            </li>
        );
    }

    function displayError(error, index) {
        return <li key={index}>- {error}</li>;
    }

    function submitInitials() {
        let errors = [];
        const initials = document.getElementById('enter-initials').value;
        if (initials.length === 0) {
            errors.push("enter at least 1 character");
        } else if (initials.length > 3) {
            errors.push('Only three characters please');
        } else if (
            initials.split("").some((char) => {
                char.match(/^[a=z0-9]+$/i);
            })
        ) {
            errors.push("Only alphanumeric sharacters");
        } else {
            postScore(initials);
        }
        setSubmissionErrors(submissionErrors.concat(errors));
        }
    }

    function postScore(initials) {
        const capitalized = initials.toUpperCase();
        const score = {
            score: {
                initials: capitalized,
                time: time,
            },
        };
        axios
          .post(`/api/v1/photos/${currentPhoto}/scores`, score, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
          })
          .then(setScoreSubmitted(true))
          .catch((err) => console.log(err));
    }

    let display;
    if (scoreQualifies() === true && scoreSubmitted === false) {
        display = (
            <div className="game-over-submit-score">
              Congrats on top 10
              <div className="enter-score">
                Enter your initials:
                <div className="score">
                  <span className="score-rank">#{calculateRank()}</span>
                  <span className="score-initials">
                    <input id="enter-initials" maxLength="3" data-testid="enter-initials"></input>
                  </span>
                  <span className="score-time">{buildTimeString(time)}</span>
                  <div className="submit-button" onClick={() => submitInitials()}>
                    Submit
                  </div>
                </div>
                <ul id="submission-errors">{submissionErrors.map(displayErrors)}</ul>
              </div>
            </div>
          );
    } else {
        display = (
        <div className="game-over-high-scores">
          <u>High Scores:</u>
          <ol>{scoreData.map(displayScore)}</ol>
          <div className="reset-button" onClick={() => resetGame()}>New Game?</div>
        </div>
    );
  }

  return (
    <div className="game-over-screen">
      <div className="game-over-photo-name">{photoName}</div>
      {display}
    </div>
  );
};

export default GameOverScreen;