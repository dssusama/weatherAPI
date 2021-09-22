const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to weather API" });
  });

require("./routes/weather.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
