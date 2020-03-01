import React from "react";

const Data = async (login, password) => {
  const dbUrl = "http://localhost:5500/src/db/db.json";

  const dbConnector = async () => {
    let resp = await fetch(dbUrl);
    let data = await resp.json();
    return data;
  };

  dbConnector();

  const findFirstObject = async () => {
    let base = await dbConnector();
    let curObj = {};

    let findObjectsArr = base.filter(obj => {
      return obj.login === login;
    });

    if (findObjectsArr.length > 0) {
      curObj = findObjectsArr[0];
    }
    return curObj;
  };

  const checkPassword = async () => {
    let checkedObj = await findFirstObject();
    if ((await checkedObj) && password) {
      if ((await checkedObj.password) === password) {
        return await checkedObj.login;
      }
    }
    return "check login and pw again";
    // return false;
  };

  return await checkPassword();
};

export default Data;
