import { MongoClient } from "mongodb";
import express from "express";
import path from "path";
import { ObjectId } from 'mongodb'
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5001;

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////MongoDB Connect to the server//////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const uri = process.env.URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
export const db = client.db("users");

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err);
    await client.close();
    process.exit(1);
  }
}
run().catch(console.dir);

process.on("SIGINT", async function () {
  console.log("app is terminating");
  await client.close();
  process.exit(0);
});

///////////////////////////////////////////////////////////////////////
///////////////////mongodb connection code ends her////////////////////
///////////////////////////////////////////////////////////////////////

const db = client.db("cruddb");

// types of api requests are
// GET
// POST
// OPTION
// PUT
// DELETE

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// GET API
app.get("/", (req, res) => {
  res.send("hello world! \n This is the response from the server");
});

// POST API
app.post("/addUser/:name/:age/:fName", async (req, res) => {
  let name = req.params.name;
  let age = req.params.age;
  let fName = req.params.fName;

  try {
    const insertResponse = await col.insertOne({
      name,
      age,
      fname,
      createdOn: new Date(),
    });
    console.log("insertResponse: ", insertResponse);

    res.send("user added successfully");
  } catch (e) {
    console.log("error inserting mongodb: ", e);
    res.status(500).send("server error, please try later");
  }
});

// DELETE API

app.delete("/delete/:userId", async (req, res) => {
  let userId = req.params.user;
  
  if (!ObjectId.isValid(req.params.postId)) {
    res.status(403).send(`Invalid post id`);
    return;
}

try {
    const deleteResponse = await db.deleteOne({ _id: new ObjectId(req.params.userId) });
    console.log("deleteResponse: ", deleteResponse);
    res.send('post deleted');
} catch (e) {
    console.log("error deleting mongodb: ", e);
    res.status(500).send('server error, please try later');
}

});

// PUT API

app.put("/update/:user/:newName", async (req, res) => {
  let user = req.params.user;
  let newName = req.params.name;

  try {
    const updateResponse = await db.updateOne(
        {
            name , fName
        },
        {
            $set: name  : newName
        });
    console.log("updateResponse: ", updateResponse);

    res.send('post updated');
} catch (e) {
    console.log("error inserting mongodb: ", e);
    res.status(500).send('server error, please try later');
}

});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("listening on port : " + PORT);
});
