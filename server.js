const express = require(`./config/express`);
const app = express();

const normalizedPath = require("path").join(__dirname, "./app/routes");

require("fs").readdirSync(normalizedPath).forEach((file) => {
  require("./app/routes/" + file)(app)
});

app.listen(process.env.PORT, () => {
  console.log(`Server is ${process.env.NODE_ENV} on port ${process.env.PORT}.`)
});