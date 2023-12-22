const express = require('express');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const port=3000;

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
