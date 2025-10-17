import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Game from "../game/game";
import { Howl } from "howler";

export default function Main({ reactRoot, user }) {
  const [theme] = useState(
    new Howl({
      src: ["./audio/title_theme.wav"],
      loop: true,
      volume: 0.3,
    })
  );

  useEffect(() => {
    theme.play();
    window.addEventListener("keydown", (event) => {
      if (["ArrowUp", "ArrowDown"].includes(event.code)) {
        event.preventDefault();
      }
    });
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleSubmit = () => {
    const player = user ? user : undefined;
    theme.pause();
    if (reactRoot) {
      reactRoot.render(<Game player={player} reactRoot={reactRoot} />);
    } else {
      const root = ReactDOM.createRoot(document.getElementById("subRoot"));
      root.render(<Game player={player} reactRoot={root} />);
    }
  };

  const header = () => {
    return user ? (
      <h1>Bem vindo de volta {user.username}!</h1>
    ) : (
      <h1>Bem-vindo ao Pac-Man!</h1>
    );
  };

  const buttons = () => {
    return user ? (
      <button className="logout-button" onClick={handleLogout}>
        Log out
      </button>
    ) : (
      <div>
      </div>
    );
  };

  const signupInstructions = () => {
    return user ? null : (
      <p className="signup-instructions">
        Crie uma conta para enviar sua pontuação para a tabela de classificação!
      </p>
    );
  };

  return (
    <div className="main" id="main">
      {header()}
      {buttons()}
      <br></br>
      <br></br>
      <img
        className="title-gif"
        src="https://media4.giphy.com/media/42rO49pxzaMnK/giphy.gif?cid=790b76116dc1bedf27887938cbe8df55b210b12f842af0e9&rid=giphy.gif&ct=g"
        alt="Pac-Man gif"
      />
      {signupInstructions()}
      <div className="register">
        <button className="play-button" id="play-button" onClick={handleSubmit}>
          Jogar
        </button>
      </div>
      <p className="name-error" id="name-error"></p>
      <p className="instructions">
        Use as teclas direcionais para mover o Pac-Man pelo tabuleiro, evitando
        os fantasmas o máximo que puder. Pegue um power-up e ataque os
        fantasmas! Coma todas as bolinhas do tabuleiro para subir de nível. Pressione Esc para pausar
        e retomar o jogo a qualquer momento. (Para usuários de celulares e tablets, um D-pad
        aparecerá abaixo do tabuleiro para você mover o Pac-Man)
      </p>
    </div>
  );
}
