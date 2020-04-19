const Data = {
  DataBase: {
    url: "http://localhost:5500/src/db",
    structure: {
      users: "users.json",
      passwords: "passwords.json",
      admins: "admins.json"
    },
    getTable: async function(table) {
      return await `${this.url}/${this.structure[table]}`;
    }
  },

  dbConnector: async function(dbName) {
    let resp = await fetch(dbName);
    let data = await resp.json();
    return data;
  },

  useTable: async function(tableName) {
    return await this.DataBase.getTable(tableName);
  },

  findMatches: async function(dbName, fieldName, phrase) {
    let base = await this.dbConnector(dbName);

    let findObjectsArr = base.filter(obj => {
      return obj[fieldName] === phrase;
    });

    return findObjectsArr;
  },

  getFirst: function(arr) {
    return arr[0];
  },

  findUserId: async function(object) {
    return await object.id;
  }
};

export default Data;
