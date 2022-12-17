import { Sequelize } from "sequelize";

const db = new Sequelize("u943608566_database_app", "u943608566_root", "Umicell2022",{
    host: "45.152.46.103",
    dialect: "mysql"
} )

export default db