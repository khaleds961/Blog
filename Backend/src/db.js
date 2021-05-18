// back/src/db.js
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const SQL = require("sql-template-strings");

const initializeDatabase = async () => {
  const db = await sqlite.open({
    filename: "db.sqlite",
    driver: sqlite3.Database,
  });

  const postsAdmin = async () => {
    let statement = `SELECT * FROM post_tbl`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };
  const messages = async () => {
    let statement = `SELECT * FROM message`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no messages found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve messages: ` + e.message);
    }
  };

  const postsUser = async () => {
    let statement = `SELECT id , name, category, title,  content, created_at, picture ,status FROM post_tbl`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };

  const getPostCategory = async (category) => {
    let statement = `SELECT name, email, category, title,  content, created_at, picture FROM post_tbl WHERE category = ${category}`;
    const posts = await db.get(statement);
    if (!posts) throw new Error(`contact ${category} not found`);
    return posts;
  };

  const createPost = async (props) => {
    if (
      !props ||
      !props.name ||
      !props.email ||
      !props.category ||
      !props.title ||
      !props.content
    ) {
      throw new Error(`you must provide all needed DATA`);
    }
    const { name, email, category, title, content, picture } = props;
    try {
      const result = await db.run(
        `INSERT INTO post_tbl (name, email, category, title,  content, picture) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, email, category, title, content, picture]
      );
      const id = result.lastID;
      return id;
    } catch (e) {
      throw new Error(`couldn't insert this combination: ` + e.message);
    }
  };

  const createMessage = async (props) => {
    if (!props || !props.username || !props.email || !props.message) {
      throw new Error(`you must provide all needed DATA`);
    }
    const { username, email, message } = props;
    try {
      const result = await db.run(
        `INSERT INTO message (username, email, message) VALUES (?, ?, ?)`,
        [username, email, message]
      );
      const id = result.lastID;
      return id;
    } catch (e) {
      throw new Error(`couldn't insert this combination: ` + e.message);
    }
  };

  const deletePosts = async (id) => {
    try {
      const result = await db.run(`DELETE FROM post_tbl WHERE id = ?`, id);
      if (result.changes === 0)
        throw new Error(`contact "${id}" does not exist`);
      return true;
    } catch (e) {
      throw new Error(`couldn't delete the contact "${id}": ` + e.message);
    }
  };

  const ChooseCat = async () => {
    let statement = `SELECT id , cat_name FROM Categories`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };

  const LimitCat = async () => {
    let statement = `SELECT id , cat_name FROM Categories LIMIT 4`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };

  const Blogs = async () => {
    let statement = `SELECT * FROM post_tbl`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };
  const getblogbyid = async (blog_id) => {
    try {
      let statement = `SELECT * from post_tbl where id = ${blog_id}`;

      const rows = await db.all(statement);
      if (!rows.length) {
        throw new Error(`no rows found`);
      }
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve about: ` + e.message);
    }
  };

  const catname = async (catname) => {
    try {
      let statement = `SELECT * from post_tbl where category = '${catname}'`;
      const rows = await db.all(statement);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve about: ` + e.message);
    }
  };
  const controller = {
    postsAdmin,
    postsUser,
    createPost,
    getPostCategory,
    deletePosts,
    createMessage,
    messages,
    ChooseCat,
    LimitCat,
    Blogs,
    getblogbyid,
    catname,
  };

  return controller;
};

const db = { initializeDatabase };

module.exports = db;
