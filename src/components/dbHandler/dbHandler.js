import React from "react";

const Data = async (login, password) => {
  const dbUrl = "http://localhost:5500/src/db/db.json";

  const dbConnector = async () => {
    let resp = await fetch(dbUrl);
    let data = await resp.json();
    return data;
  };

  dbConnector();

  const findMatches = async (fieldName, phrase) => {
    let base = await dbConnector();

    let findObjectsArr = base.filter(obj => {
      return obj[fieldName] === phrase;
    });

    return findObjectsArr;
  };

  const getFirst = arr => {
    return arr[0];
  };

  const checkPassword = async () => {
    let checkedObj = await getFirst(await findMatches("login", login));
    if (await checkedObj) {
      if (password) {
        if ((await checkedObj.password) === password) {
          return await checkedObj.login;
        }
      }
    }

    return "check login and pw again";
    // return false;
  };

  return await checkPassword();
};

export default Data;
