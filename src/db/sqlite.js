const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '../../../police',
    logging: false
})

sequelize.authenticate().then(() => {
    console.log('Connected to the SQLite')
})

module.exports = sequelize











// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS Plots (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
//         address TEXT NOT NULL)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Cars (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         color TINYTEXT NULL,
//         govnumber TINYTEXT NULL,
//         Plots_id INT NOT NULL,
//         FOREIGN KEY(Plots_id) REFERENCES Plots(id) ON DELETE CASCADE)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Crews (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         crewName TINYTEXT NULL,
//         Cars_id INT NOT NULL,
//         FOREIGN KEY(Cars_id) REFERENCES Cars(id) ON DELETE CASCADE)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Calls (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         addressee TINYTEXT NOT NULL,
//         address TINYTEXT NULL,
//         incident INT NULL,
//         description TINYTEXT NULL,
//         Crews_id INT NOT NULL,
//         FOREIGN KEY(Crews_id) REFERENCES Crews(id) ON DELETE CASCADE)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Characters (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         fullname TINYTEXT NULL,
//         age INT NULL)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS IncidentMembers (
//         Characters_id INT NOT NULL,
//         Calls_id INT NOT NULL,
//         FOREIGN KEY(Characters_id) REFERENCES Characters(id) ON DELETE CASCADE,
//         FOREIGN KEY(Calls_id) REFERENCES Calls(id) ON DELETE CASCADE)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS IncidentTypes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         name TINYTEXT NOT NULL,
//         description TINYTEXT NULL)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Incidents (
//         IncidentTypes_id INT NOT NULL,
//         Calls_id INT NOT NULL,
//         FOREIGN KEY(IncidentTypes_id) REFERENCES IncidentTypes(id) ON DELETE CASCADE,
//         FOREIGN KEY(Calls_id) REFERENCES Calls(id) ON DELETE CASCADE)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Roles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         name TINYTEXT NULL)`
//     )
//     db.run(`CREATE TABLE IF NOT EXISTS Staff (
//         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//         fullname TINYTEXT NULL,
//         age INT NULL,
//         Crews_id INT NOT NULL,
//         Plots_id INT NOT NULL,
//         Roles_id INT NOT NULL,
//         FOREIGN KEY(Crews_id) REFERENCES Crews (id) ON DELETE CASCADE,
//         FOREIGN KEY(Plots_id) REFERENCES Plots (id) ON DELETE CASCADE,
//         FOREIGN KEY(Roles_id) REFERENCES Roles(id) ON DELETE CASCADE)`
//     )
// })

// module.exports = db