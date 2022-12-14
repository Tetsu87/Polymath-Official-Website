import React, { useEffect, useState } from "react";
import "./NoteTimeline.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import note_logo from "./images/note_logo.png";
import MediaQuery from "react-responsive";

function NoteTimeline() {
  const [articles, setArticles] = useState([]);
  const displayNumber = 6;

  const fetchNoteRss = () => {
    // const endpointURL = "http://localhost:5000/Note";
    const endpointURL = "https://polymath-express.wl.r.appspot.com/note";
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        const articles = [];
        for (let i = 0; i < displayNumber; i++) {
          if (data["items"][i]) {
            articles.push({
              title: data["items"][i]["title"],
              link: data["items"][i]["link"],
              content: data["items"][i]["content"],
              thumbnailURL: data["items"][i]["media:thumbnail"],
              pubDate: data["items"][i]["pubDate"],
            });
          } else {
            console.log("doesn't exist");
          }
        }

        console.log(articles);
        console.log(articles[0]["thumbnailURL"]);

        setArticles(articles);
      });
  };

  useEffect(() => {
    fetchNoteRss();
  }, []);

  return (
    <div className="mt-3">
      <MediaQuery query="(max-width: 767px)">
        <div className="center mb-3">
          <a href="https://note.com/polymathnyc" target="_blank">
            <img src={note_logo} className="logo" />
          </a>
        </div>
        <div className="articles-wrapper-sp mb-3">
          {articles.map((article) => (
            <a href={article.link} target="_blank">
              <div className="article-frame-sp">
                <div className="article-width-sp">
                  <div className="article-wrapper-sp">
                    <div className="center py-1 pe-2">
                      <img
                        src={article.thumbnailURL}
                        className="thumbnail-sp"
                        loading="lazy"
                      />
                    </div>
                    <div className="ps-1 article-text-wrapper-sp">
                      <div className="title-size-sp">{article.title}</div>
                      <div className="date-size-sp">
                        ????????????{article.pubDate.slice(4, 16)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Row className="smartphone">
                <Col className="p-1">
                  <div className="center">
                    <img src={article.thumbnailURL} className="thumbnail" loading="lazy"/>
                  </div>
                </Col>
                <Col className="p-1">
                  <div className="title-size">{article.title}</div>
                  <div className="date-size">
                    ????????????{article.pubDate.slice(4, 16)}
                  </div>
                </Col>
              </Row> */}
            </a>
          ))}
        </div>
      </MediaQuery>

      <MediaQuery query="(min-width: 768px)">
        <div className="center">
          <a href="https://note.com/polymathnyc" target="_blank">
            <img src={note_logo} className="logo" />
          </a>
        </div>
        {articles.map((article) => (
          <a href={article.link} target="_blank">
            <Row className="my-2 pc">
              <Col className="p-0 m-0">
                <div className="center">
                  <img
                    src={article.thumbnailURL}
                    className="thumbnail"
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col className="p-0 m-0">
                <div className="title-size">{article.title}</div>
                <div className="date-size">
                  ????????????{article.pubDate.slice(4, 16)}
                </div>
              </Col>
            </Row>
          </a>
        ))}
      </MediaQuery>
    </div>
  );
}

export default NoteTimeline;
