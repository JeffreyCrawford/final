/* Express setup */
var express = require("express");
var app = express();
var PORT = 3001;


/* API routes */
var apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

/* User routes */
var userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

/* Admin routes */
var adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);


/* Server start */
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});