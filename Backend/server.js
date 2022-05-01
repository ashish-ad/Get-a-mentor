import express from "express";
import mongooseConnection from "./DB/index.js";
import router from "./Routes/route.js";
import dotnet from 'dotenv';

<<<<<<< HEAD
const app = express();
app.use(express.json());

=======
const app = express(); 

dotnet.config();

const port = process.env.PORT || 5000;
>>>>>>> e0191f3 (File structure change and some changes in backend)

app.use("/", router);

<<<<<<< HEAD
const port = process.env.PORT || 5000;

app.use("/", router);

app.all("*", (req, res) => {
  res.send("Invalid Request. Please contact Adminitstrator.");
});

=======
app.all("*", (req, res) => {
  res.send("Invalid Request. Please contact Adminitstrator.");
});

>>>>>>> e0191f3 (File structure change and some changes in backend)
const initializeServer = async () => {
  await mongooseConnection();
  app.listen(port, (err) => {
    console.log(`http://localhost:${port}`);
    if (err) {
      console.log(`Error Starting Application Server`);
    }
  });
};

<<<<<<< HEAD
initializeServer();
=======
initializeServer();  
>>>>>>> e0191f3 (File structure change and some changes in backend)
