const db = require("../db");

const getAllUsers = (req, res) => {
  db.all("select * from user", [], (err, rows) => {
    if (err) return res.json({ message: err.message });

    res.json({ message: "ok", data: rows });
  });
};

const getUser = (req, res) => {
  const sql = "select * from user where user_id=?";
  console.log(req.params.id);
  db.all(sql, [req.params.id], (err, rows) => {
    if (err) return res.json({ message: err.message });

    res.json({ message: "ok", data: rows });
  });
};

const addUser = (req, res) => {
  const newUser = [
    req.body.first_name,
    req.body.last_name,
    req.body.login,
    req.body.password,
  ];
  sql =
    "insert into user (first_name, last_name, login, password) values (?,?,?,?)";

  db.run(sql, newUser, (err) => {
    if (err) return res.json({ message: err.message });

    res.json({ message: "ok" });
  });
};

const updateUser = (req, res) => {
  sql =
    "update user set first_name = ?, last_name = ?, password = ? where user_id = ?";

  db.run(
    sql,
    [
      req.body.first_name,
      req.body.last_name,
      req.body.password,
      req.body.user_id,
    ],
    (err) => {
      if (err) return res.json({ message: err.message });

      res.json({ message: "ok" });
    }
  );
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
};
