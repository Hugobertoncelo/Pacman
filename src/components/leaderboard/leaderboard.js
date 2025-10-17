import React from "react";
import "./leaderboard.css";
import Game from "../game/game";
import Main from "../main/main";

export default function Leaderboard({ variables }) {
  const resetVariables = () => {
    variables.score = 0;
    variables.start = true;
  };

  const handlePlayAgain = () => {
    resetVariables();
    variables.reactRoot.render(
      <Game player={variables.player} reactRoot={variables.reactRoot} />
    );
  };

  const handleChangePlayer = () => {
    resetVariables();
    variables.reactRoot.render(
      <Main user={variables.player} reactRoot={variables.reactRoot} />
    );
  };

  return (
    <div className="leaderboard">
      <h1>Game Over</h1>
      <h4>Você marcou {variables.score} pontos</h4>

      <div className="buttons">
        <button className="play-again" onClick={handlePlayAgain}>
          Jogar novamente
        </button>
        <button className="home" onClick={handleChangePlayer}>
          Home
        </button>
      </div>
    </div>
  );
}
