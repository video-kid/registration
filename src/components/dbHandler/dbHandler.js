import React from "react";

const Data = {
  dbUrl: "http://localhost:5500/src/db/db.json",

  dbConnector: async function() {
    let resp = await fetch(this.dbUrl);
    let data = await resp.json();
    return data;
  },

  initialize: function() {
    return this.dbConnector();
  },

  findMatches: async function(fieldName, phrase) {
    let base = await this.dbConnector();

    let findObjectsArr = base.filter(obj => {
      return obj[fieldName] === phrase;
    });

    return findObjectsArr;
  },

  getFirst: function(arr) {
    return arr[0];
  },

  checkPassword: async function(login, password) {
    let checkedObj = await this.getFirst(
      await this.findMatches("login", login)
    );
    if (await checkedObj) {
      if (password) {
        if ((await checkedObj.password) === password) {
          return await checkedObj.login;
        }
      }
    }

    return "check login and pw again";
  }
};

export default Data;
