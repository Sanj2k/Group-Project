require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/route");
const productRoute = require("./routes/productRoute");
// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(bodyParser.json());


// routes
app.use("/api", userRoute);
app.use("/api/item", productRoute);

app.get("/", cors(), (req, res) => {
 
});

app.post("/", async(req,res) => {
  const {email} = req.body;

  try{
    const check = await collection.findOne({ email:email });
    if (check) {
      res.json("exist");
    }
    else {
      res.json("not exist");
    
  }
  }catch (e) {
    res.json("not exist");
  }
});




app.post("/signup", async (req, res) => {
  const [email, password] = req.body;

  const data = {
    email:email,
    password:password
  }

  try {
    const check = await collection.findOne({ email:email });

    if (check) {
      res.json("exist");
    }
    else {
      res.json("not exist");
      await collection.insertMany(data)
    }

  } catch (e) {
    res.json("not exist");
  }
});



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "You are now successfully connected to Atlas DB & listening to port: ",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error); // catches any errors if it fails to connect
  });

process.env;
