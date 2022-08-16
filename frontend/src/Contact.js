import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import MediaQuery from "react-responsive";

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

    let response = await fetch("https://polymath-express.wl.r.appspot.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <MediaQuery query="(max-width: 767px)">
          <p className="text-center small-letter smartphone">
          無料相談を随時承ってます。まずはお気軽にご連絡ください。
          </p>
          <div className="mb-1">
            <input type="text" id="name" placeholder="名前" className="smartphone" required />
          </div>
          <div className="mb-1">
            <input
              type="email"
              id="email"
              placeholder="メールアドレス"
              className="smartphone"
              required
            />
          </div>
          <div className="mb-1">
            <input type="text" id="tel" placeholder="電話番号" className="smartphone" required />
          </div>
          <div className="mb-1">
            <textarea
              id="message"
              placeholder="問い合わせ内容"
              className="smartphone"
              required
            ></textarea>
          </div>
          <div>
            <select id="options" required className="mt-3 option-font smartphone">
              <optgroup>
                <option value=""> 当サービスを知ったきっかけ*</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">Youtube</option>
                <option value="Note">Note</option>
                <option value="友人">友人</option>
                <option value="会社">会社</option>
                <option value="大学">大学</option>
                <option value="その他">その他</option>
              </optgroup>
            </select>
          </div>
          <button type="submit" className="mt-3 mb-3 button">
            {status}
          </button>
        </MediaQuery>

        <MediaQuery query="(min-width: 768px)">
          <p className="text-center small-letter pc">
            無料相談を随時承ってます。まずはお気軽にご連絡ください。
          </p>
          <div className="mb-1">
            <input type="text" id="name" placeholder="名前" className="pc" required />
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
            <input type="text" id="tel" placeholder="電話番号" className="pc" required />
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
            <select id="options" required className="mt-3 option-font pc">
              <optgroup>
                <option value=""> 当サービスを知ったきっかけ*</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">Youtube</option>
                <option value="Note">Note</option>
                <option value="友人">友人</option>
                <option value="会社">会社</option>
                <option value="大学">大学</option>
                <option value="その他">その他</option>
              </optgroup>
            </select>
          </div>
          <button type="submit" className="mt-3 mb-3 button">
            {status}
          </button>
        </MediaQuery>
      </div>
    </form>
  );
}

export default Contact;
