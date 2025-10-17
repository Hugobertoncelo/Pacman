import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

const authUrl = process.env.REACT_APP_BACKEND_URL
  ? `${process.env.REACT_APP_BACKEND_URL}/auth`
  : "http://localhost:8080/auth";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(authUrl, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setUser(res.data.user);
        });
    }
  }, []);

  return (
    <div className="App">
      <div id="subRoot">
        <Routes>
          <Route path="/" element={<Main user={user} />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
