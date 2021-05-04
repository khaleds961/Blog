const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const test = async () => {

    /**
     * create and connect to the db
     */
    const db = await sqlite.open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    })

    /**
     * Create the table
     **/
    await db.run(`CREATE TABLE post_tbl 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL, 
        content text NOT NULL ,
        created_at DATE NOT NULL,
        picture TEXT NOT NULL,
        creator_id TEXT NOT NULL,
        );`);

   
}
