/*
 * Title: Uptime Monitoring application
 * Description: A Restful api to monitor up or down time of user defined links
 * Author: AH Hridoy
 * Date: 25/02/2022
 */

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

// app object - module scaffolding
const app = {};

// testing file system 

// create data // -------------------------------------------- //
// data.create("test", "newFile", {name: "Bangladesh", Language: "Bangla"}, (err) => {
//     console.log(`error was`, err);
// })


// read data // -------------------------------------------- //
// data.read("test", "newFile", (err, result) => {
//     console.log(err, result);
// })


// update data // -------------------------------------------- //
// data.update(
//     "test",
//     "newFile",
//     { name: "England", language: "English" },
//     (err) => {
//         console.log(err);
//     }
// );


// delete data // -------------------------------------------- //
// data.delete("test", "newFile", (err) => {
//     console.log(err);
// });


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
