import React from "react";

const Data = (login, password) => {
  fetch("http://localhost:5500/src/db/db.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  return "test";
};

export default Data;
