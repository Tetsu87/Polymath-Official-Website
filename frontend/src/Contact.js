import React, { useState } from "react";
import "./Contact.css";
import line from "./images/line.png";
import MediaQuery from "react-responsive";
import Button from "react-bootstrap/Button";

function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("buttom pushed");
    setStatus("Sending...");
    const { name, email, tel, message, options } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      tel: tel.value,
      message: message.value,
      options: options.value,
    };

    let response = await fetch(
      "https://polymath-express.wl.r.appspot.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <MediaQuery query="(max-width: 767px)">
          <p className="text-center small-letter smartphone-contact">
            無料相談を随時承ってます。まずはお気軽にご連絡ください。
          </p>
          <div className="mb-1">
            <input
              type="text"
              id="name"
              placeholder="名前"
              className="smartphone-contact"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="email"
              id="email"
              placeholder="メールアドレス"
              className="smartphone-contact"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="tel"
              placeholder="電話番号"
              className="smartphone-contact"
              required
            />
          </div>
          <div className="mb-1">
            <textarea
              id="message"
              placeholder="問い合わせ内容"
              className="smartphone-contact"
              required
            ></textarea>
          </div>
          <div>
            <select
              id="options"
              required
              className="mt-3 option-font smartphone-contact"
            >
              <option value="" disabled selected required>
                当サービスを知ったきっかけ*
              </option>
              <option value="Twitter" required>
                Twitter
              </option>
              <option value="Facebook" required>
                Facebook
              </option>
              <option value="Youtube" required>
                Youtube
              </option>
              <option value="Note" required>
                Note
              </option>
              <option value="友人" required>
                友人
              </option>
              <option value="会社" required>
                会社
              </option>
              <option value="大学" required>
                大学
              </option>
              <option value="その他" required>
                その他
              </option>
            </select>
          </div>
          <button type="submit" className="mt-3 mb-3 button">
            {status}
          </button>

          <p className="text-center small-letter smartphone-contact">
            簡単なご相談はLINEでも承っております。お気軽にどうぞ。
          </p>

          <style type="text/css">
            {`
    .btn-line {
      background-color: #09b53b;
      color: white;
    }

    .btn-xxl {
      padding: 0.5rem 1.2rem;
      font-size: 1.2rem;
    }
    `}
          </style>

          <a href="https://lin.ee/Rz2NZubS" target="_blank">
            <div className="line-wrapper">
              <div className="px-3">
                <img src={line} className="line-logo" />
              </div>
              <div>
                <Button variant="line" size="xxl">
                  LINEで相談する
                </Button>
              </div>
            </div>
          </a>
        </MediaQuery>

        <MediaQuery query="(min-width: 768px)">
          <p className="text-center small-letter pc">
            無料相談の受付を随時承ってます。お気軽にご連絡ください。
          </p>
          <div className="mb-1">
            <input
              type="text"
              id="name"
              placeholder="名前"
              className="pc"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="email"
              id="email"
              placeholder="メールアドレス"
              className="pc"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="tel"
              placeholder="電話番号"
              className="pc"
              required
            />
          </div>
          <div className="mb-1">
            <textarea
              id="message"
              placeholder="問い合わせ内容"
              className="pc"
              required
            ></textarea>
          </div>
          <div>
            <select required id="options" className="mt-3 option-font pc">
              <option required selected value="">
                {" "}
                当サービスを知ったきっかけ*
              </option>
              <option required value="Twitter">
                Twitter
              </option>
              <option required value="Facebook">
                Facebook
              </option>
              <option required value="Youtube">
                Youtube
              </option>
              <option required value="Note">
                Note
              </option>
              <option required value="友人">
                友人
              </option>
              <option required value="会社">
                会社
              </option>
              <option required value="大学">
                大学
              </option>
              <option required value="その他">
                その他
              </option>
            </select>
          </div>
          <button type="submit" className="mt-3 mb-3 button">
            {status}
          </button>

          <p className="text-center small-letter pc">
            簡単なご相談はLINEでも承っております。お気軽にどうぞ。
          </p>

          <style type="text/css">
            {`
    .btn-line {
      background-color: #09b53b;
      color: white;
    }

    .btn-xxl {
      padding: 0.5rem 1.2rem;
      font-size: 1.2rem;
    }
    `}
          </style>

          <a href="https://lin.ee/Rz2NZubS" target="_blank">
            <div className="line-wrapper">
              <div className="px-3">
                <img src={line} className="line-logo" />
              </div>
              <div>
                <Button variant="line" size="xxl">
                  LINEで相談する
                </Button>
              </div>
            </div>
          </a>
        </MediaQuery>
      </div>
    </form>
  );
}

export default Contact;
