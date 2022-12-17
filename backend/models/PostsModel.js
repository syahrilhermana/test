import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Posts = db.define('posts', {
    title: DataTypes.STRING(200),
    content: DataTypes.TEXT,
    category: DataTypes.STRING(100),
    status: DataTypes.STRING(100)
}, {
    freezeTableName: true
});

export default Posts;

(async()=>{
    await db.sync();
})();