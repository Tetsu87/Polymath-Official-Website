const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
var config = require("./my_config");
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
    to: config.postTo,
    bcc: config.postBccTo,
    replyTo: req.body.email,
    subject: "新規フォームが送信されました",
    html: `<p>名前: ${name}</p>
               <p>メールアドレス: ${email}</p>
               <p>電話番号: ${tel}</p>
               <p>問い合わせ内容: ${message}</p>
              <p>オプションを選択: ${options}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "エラー。もう一度試して頂くか、LINEで相談ボタンからご連絡下さい。" });
    } else {
      res.json({ status: "Polymath NYCへのお問い合わせありがとうございます。出来る限り早く返信させて頂きます。今しばらくお待ちくださいませ。" });
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