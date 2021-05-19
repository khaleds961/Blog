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
  const pendingPosts = async () => {
    let statement = `SELECT * FROM post_tbl WHERE status= 'pending'`;

    try {
        const rows = await db.all(statement);
        if (!rows.length) throw new Error(`no rows found`);
        return rows;
    } catch (e) {
        throw new Error(`couldn't retrieve posts:  `+ e.message);
    }
}
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
    let statement = `SELECT id , name, category, title,  content, created_at, picture FROM post_tbl WHERE status = 'accepted'`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };

  const postsID = async (id) => {
    let statement = `SELECT id, name, category, title,  content, created_at, picture FROM post_tbl WHERE id= ${id}`
   
    try {
        const rows = await db.all(statement);
        if (!rows.length) throw new Error(`no rows found`);
        return rows;
    } catch (e) {
        throw new Error(`couldn't retrieve posts: ` + e.message);
    }
}

  // const getPostCategory = async (category) => {
  //   let statement = `SELECT name, category, title,  content, created_at, picture FROM post_tbl WHERE category = ${category}`;
  //   const posts = await db.get(statement);
  //   if (!posts) throw new Error(`contact ${category} not found`);
  //   return posts;
  // };

  const createPost = async (props) => {////////////////////////////////////////////////////////////////////
    if (!props || !props.name  || !props.title   ) {
        throw new Error(`you must provide all needed DATA`);
     
    }
    const { name, title, image} = props;
    try {
        const result = await db.run(`INSERT INTO post_tbl (name, title, picture) VALUES (?, ?, ?)`, [name,title,image]);
        const id = result.lastID;
        return id;
    } catch (e) {
        throw new Error(`couldn't insert this combination: ` + e.message);
    }
    
}

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
    let statement = `SELECT * FROM post_tbl ORDER BY id DESC LIMIT 5`;

    try {
      const rows = await db.all(statement);
      if (!rows.length) throw new Error(`no rows found`);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve contacts: ` + e.message);
    }
  };

  // const getblogbyid = async (blog_id) => {
  //   try {
  //     let statement = `SELECT * from post_tbl where id = ${blog_id}`;

  //     const rows = await db.all(statement);
  //     if (!rows.length) {
  //       throw new Error(`no rows found`);
  //     }
  //     return rows;
  //   } catch (e) {
  //     throw new Error(`couldn't retrieve about: ` + e.message);
  //   }
  // };

  const catname = async (catname) => {
    try {
      let statement = `SELECT name, category, title,  content, created_at, picture from post_tbl where category = '${catname}'`;
      const rows = await db.all(statement);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve about: ` + e.message);
    }
  };

  const search = async (props) => {
    const { title } = props;
    try {
      let statement = `SELECT * FROM post_tbl WHERE title LIKE '%${title}%'`;
      const rows = await db.all(statement);
      return rows;
    } catch (e) {
      throw new Error(`couldn't retrieve about: ` + e.message);
    }
  };

  const acceptPost = async (id) => {
        
    let stmt, params = [];
        stmt = `UPDATE post_tbl SET  status = 'A' WHERE id = ?`;
        params = [id];
    try {
        const result = await db.run(stmt, params);
        if (result.changes === 0) throw new Error(`no changes were made`);
        return true;
    } catch (e) {
        throw new Error(`couldn't accept this post ${id}: ` + e.message);
    }
}
  const controller = {
    postsAdmin,
    acceptPost,
    postsUser,
    createPost,
    deletePosts,
    createMessage,
    messages,
    ChooseCat,
    LimitCat,
    Blogs,
    postsID,
    getblogbyid,
    catname,
    search,
    pendingPosts
  };

  return controller;
};

const db = { initializeDatabase };

module.exports = db;
