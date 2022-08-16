const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
var config = require("./config");
const PORT = parseInt(process.env.PORT) || 8080;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user,
    pass: config.password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.tel;
  const message = req.body.message;
  const options = req.body.options;
  const mail = {
    from: name,
    to: config.postToTest,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Tel: ${tel}</p>
               <p>Message: ${message}</p>
              <p>Options: ${options}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent Dayo" });
    }
  });
});

let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    feed: ['otherTitle', 'extendedDescription'],
    item: ['media:thumbnail'],

  }
});

async function getNoteRss(){
  let feed = await parser.parseURL('https://note.com/polymathnyc/rss');
  return feed;
}

app.get("/Note", async(req, res) => {
  let origRes = await getNoteRss();
  res.send(origRes);
});