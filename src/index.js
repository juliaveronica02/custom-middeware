const express = require("express");
const app = express();
let request = 0; //initial state
app.get("/", function(req, res, next) {
  request++;
  let jojos = [
    {
      name: "Jotaro Kujo",
      stand: "Star Platinum"
    },
    {
      name: "Joseph Joestar",
      stand: "Hermit Purple"
    },
    {
      name: "Johnny Joestar",
      stand: "Tusk"
    }
  ];
  res.send(jojos);
  console.log(`request count: ${request}`);
});
app.listen(5000, () => console.log("listening to port 5000"));
