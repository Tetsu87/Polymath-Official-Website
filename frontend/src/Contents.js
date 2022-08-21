import columbia from "./images/columbia.jpg";
import usc from "./images/usc.jpg";
import uw from "./images/uw.png";
import georgiatech from "./images/georgiatech.png";
import nyu from "./images/nyu.jpg";
import texastech from "./images/texastech.png";
import "./Contents.css";
import Contact from "./Contact";
import TwitterTimeline from "./TwitterTimeline";
import NoteTimeline from "./NoteTimeline";
import MediaQuery from "react-responsive";
import Members from "./Members";

function Contents() {
  return (
    <div>
      <MediaQuery query="(max-width: 767px)">
        <div className="intro-center">
          <a id="home" className="header-adjustment link-style-deactivate"></a>
          <div className="intro-sp px-4 text-justify">
            Polymathはニューヨークとロサンゼルスを拠点とする、理系専門留学コンサルティングファームです。アドバイザーは米国の第一線で働くGAFAM・外資投資銀行エンジニア、現役CS大学院生で構成されており、理系大学留学・就職、そして医師の臨床研修（レジデンシー、フェローシップ）における情報戦の最前線にいます。複数のアドバイザーが一丸となりチームであなたの留学を、志望校選定から、エッセイ添削、出願、合格まで力強くバックアップ致します。
            <br />
            <br />
            元々は家族・友人・同僚向けにアドバイスをしていましたが、「もっと留学生や海外で活躍する仲間を増やしたい！」という想いから当サービスを始めることにしました。Polymathのミッションは皆様の留学を実現させ、海外で活躍するエンジニア、データサイエンティスト、研究者、医師の仲間を増やすことです。ニューヨークで出会った３人のエンジニアがあなたの理系留学をチーム一丸となってサポート致します。
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div className="intro-center">
          <div className="intro-pc mt-4 px-3 text-justify">
            Polymathはニューヨークとロサンゼルスを拠点とする、理系専門留学コンサルティングファームです。アドバイザーは米国の第一線で働くGAFAM・外資投資銀行エンジニア、現役CS大学院生で構成されており、理系大学留学・就職、そして医師の臨床研修（レジデンシー、フェローシップ）における情報戦の最前線にいます。複数のアドバイザーが一丸となりチームであなたの留学を、志望校選定から、エッセイ添削、出願、合格まで力強くバックアップ致します。
            <br />
            <br />
            元々は家族・友人・同僚向けにアドバイスをしていましたが、「もっと留学生や海外で活躍する仲間を増やしたい！」という想いから当サービスを始めることにしました。Polymathのミッションは皆様の留学を実現させ、海外で活躍するエンジニア、データサイエンティスト、研究者、医師の仲間を増やすことです。ニューヨークで出会った３人のエンジニアがあなたの理系留学をチーム一丸となってサポート致します。
          </div>
        </div>
      </MediaQuery>

      <div className="subTitle pale-background pt-5 pb-3 mt-5 px-3">
        <MediaQuery query="(max-width: 767px)">
          <a id="team" className="header-adjustment link-style-deactivate">
            Meet The Team
          </a>
        </MediaQuery>

        <MediaQuery query="(min-width: 768px)">
          <a id="team" className="link-style-deactivate">
            Meet The Team
          </a>
        </MediaQuery>
      </div>

      <Members />

      <div className="subTitle mt-5 mb-4">
        <MediaQuery query="(max-width: 767px)">
          <a id="value" className="header-adjustment link-style-deactivate">
            Why Polymath?
          </a>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <a id="value" className="link-style-deactivate">
            Why Polymath?
          </a>
        </MediaQuery>
      </div>

      <MediaQuery query="(max-width: 767px)">
        <div className="polymath-value">
          <div className="merits-title-sp mb-3">
            Polymathは最新の情報を
            <br />
            持っています
          </div>
          <p className="px-4 pb-4 value-contents-width-sp">
            私達はニューヨークとロサンゼルスを拠点とし、米国大学留学・就職における情報戦の最前線にいます。現地のアドミッション、現役大学生、卒業生のネットワークを通じて常に最新の動向を把握しています。
          </p>

          <div className="merits-title-sp mb-3">
            ​米国の第一線エンジニア
            <br />
            による指導
          </div>
          <p className="px-4 value-contents-width-sp">
            米国の第一線で活躍するエンジニア陣があなたの留学をバックアップします。アドバイザーは現役のデータサイエンティスト、ビッグデータエンジニア、デリバティブトレーダー、現役CS大学院生なので、テクニカルなエッセイの添削が可能です。
          </p>
          <p className="px-4 pb-4 value-contents-width-sp">
            例えば、「AIに興味があります」というエッセイと、「トレーディングフロアのチャット履歴を使ってオプション・プライスを予測する深層学習GPT-3モデル構築したいので、ヤン・ルカン教授とデビッド・ローゼンバーグ教授の授業を履修予定です」というエッセイではどちらが大学のアドミッションを唸らせるかは一目瞭然でしょう。
          </p>
          <div className="merits-title-sp mb-3">
            ​チームであなたの成功に
            <br />
            コミットします
          </div>
          <p className="px-4 pb-4 value-contents-width-sp">
            他の留学斡旋会社とは異なり、Polymathではチームであなたの留学をサポートします。専門知識を有する複数のアドバイザーと何度もディスカッションを重ねていくことで、合格の可能性を限りなく高めることができるためです。私達は一切妥協をしません。徹底的に話し合いを重ねて一緒に合格を勝ち取りましょう。
          </p>
          <div className="merits-title-sp mb-3">
            アドバイザー全員が
            <br />
            米国理系大学院卒
          </div>
          <p className="px-4 value-contents-width-sp">
            実際に経験をした人のみが専門性の高いアドバイスをすることができます。Polymathのアドバイザー陣は全員が米国理系大学院卒なので、実体験に基づく、本やウェブサイトに載っていないような留学のリアルをお伝え致します。
          </p>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div className="polymath-value">
          <div className="merits-title mb-3">
            Polymathは最新の情報を持っています
          </div>
          <p className="px-3">
            私達はニューヨークとロサンゼルスを拠点とし、米国大学留学・就職における情報戦の最前線にいます。現地のアドミッション、現役大学生、卒業生のネットワークを通じて常に最新の動向を把握しています。
          </p>

          <div className="merits-title mb-3">
            ​米国の第一線エンジニアによる指導
          </div>
          <p className="px-3">
            米国の第一線で活躍するエンジニア陣があなたの留学をバックアップします。アドバイザーは現役のデータサイエンティスト、ビッグデータエンジニア、デリバティブトレーダー、現役CS大学院生なので、テクニカルなエッセイの添削が可能です。
          </p>
          <p className="px-3">
            例えば、「AIに興味があります」というエッセイと、「トレーディングフロアのチャット履歴を使ってオプション・プライスを予測する深層学習GPT-3モデル構築したいので、ヤン・ルカン教授とデビッド・ローゼンバーグ教授の授業を履修予定です」というエッセイではどちらが大学のアドミッションを唸らせるかは一目瞭然でしょう。
          </p>
          <div className="merits-title mb-3">
            ​チームであなたの成功にコミットします
          </div>
          <p className="px-3">
            他の留学斡旋会社とは異なり、Polymathではチームであなたの留学をサポートします。専門知識を有する複数のアドバイザーと何度もディスカッションを重ねていくことで、合格の可能性を限りなく高めることができるためです。私達は一切妥協をしません。徹底的に話し合いを重ねて一緒に合格を勝ち取りましょう。
          </p>
          <div className="merits-title mb-3">
            アドバイザー全員が米国理系大学院卒
          </div>
          <p className="px-3">
            実際に経験をした人のみが専門性の高いアドバイスをすることができます。Polymathのアドバイザー陣は全員が米国理系大学院卒なので、実体験に基づく、本やウェブサイトに載っていないような留学のリアルをお伝え致します。
          </p>
        </div>
      </MediaQuery>

      <div className="achievements pale-background pt-5">
        <div className="subTitle">
          <MediaQuery query="(max-width: 767px)">
            <a
              id="achievements"
              className="header-adjustment link-style-deactivate"
            >
              Achievements
            </a>
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <a id="achievements" className="link-style-deactivate">
              Achievements
            </a>
          </MediaQuery>
        </div>
        <p className="text-center">直近3年間実績</p>

        <MediaQuery query="(max-width: 767px)">
          <div className="univ-logo-wrapper-sp py-3">
            <img src={columbia} className="univ-logo" />
            <img src={usc} className="univ-logo" />
            <img src={uw} className="univ-logo" />
            <img src={georgiatech} className="univ-logo" />
            <img src={nyu} className="univ-logo" />
            <img src={texastech} className="univ-logo" />
          </div>

          <div className="achievements-list-sp  pb-5">
            <div className="ul-align-center py-3">
              <ul>
                <li className="li-width-sp">
                  Columbia University - MS in Data Science
                </li>
                <li className="li-width-sp">
                  University of Southern California - MS in Computer Science
                </li>
                <li className="li-width-sp">
                  New York University - MS in Electrical and Computer Eng
                </li>
                <li className="li-width-sp">
                  University of Washington - MS in Computer Science
                </li>
                <li className="li-width-sp">
                  University of San Fransisco - MS in Computer Science
                </li>
                <li className="li-width-sp">
                  Rutgers University - MS in Computer Science
                </li>
                <li className="li-width-sp">Georgia Tech - MS in Analytics</li>
                <li className="li-width-sp">
                  Georgia Tech - MS in Computer Science
                </li>
                <li className="li-width-sp">
                  Texas Tech University - Medical Residency
                </li>
                <li className="li-width-sp">
                  Flushing Medical Center - Medical Residency
                </li>
                <li className="li-width-sp">
                  {" "}
                  Montefiore Medical Center - Medical Fellowship
                </li>
              </ul>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div className="univ-logo-wrapper py-3">
            <img src={columbia} className="univ-logo" />
            <img src={usc} className="univ-logo" />
            <img src={uw} className="univ-logo" />
            <img src={georgiatech} className="univ-logo" />
            <img src={nyu} className="univ-logo" />
            <img src={texastech} className="univ-logo" />
          </div>

          <div className="achievements-list px-3 pb-5">
            <div className="ul-align-center py-3">
              <ul>
                <li>Columbia University - MS in Data Science</li>
                <li>
                  University of Southern California - MS in Computer Science
                </li>
                <li>New York University - MS in Electrical and Computer Eng</li>
                <li>University of Washington - MS in Computer Science</li>
                <li>University of San Fransisco - MS in Computer Science</li>
                <li>Rutgers University - MS in Computer Science</li>
                <li>Georgia Tech - MS in Analytics</li>
                <li>Georgia Tech - MS in Computer Science</li>
                <li>Texas Tech University - Medical Residency</li>
                <li>Flushing Medical Center - Medical Residency</li>
                <li> Montefiore Medical Center - Medical Fellowship</li>
              </ul>
            </div>
          </div>
        </MediaQuery>
      </div>

      <div className="contact bg-primary text-light pt-3 pb-5">
        <div className="subTitle text-light my-3">
          <MediaQuery query="(max-width: 767px)">
            <a
              id="contact"
              className="header-adjustment link-white-style-deactivate"
            >
              Contact
            </a>
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <a id="contact" className="link-white-style-deactivate">
              Contact
            </a>
          </MediaQuery>
        </div>
        <Contact />
      </div>

      <div className="py-3">
        <div className="subTitle">
          <MediaQuery query="(max-width: 767px)">
            <a id="social" className="header-adjustment link-style-deactivate">
              Social
            </a>
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <a id="social" className="link-style-deactivate">
              Social
            </a>
          </MediaQuery>
        </div>
        <MediaQuery query="(max-width: 767px)">
          <div className="social-smartphone">
            <NoteTimeline />
            <TwitterTimeline />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div className="social-pc">
            <div className="social-width-pc">
              <div className="social-wrapper-pc">
                <div>
                  <NoteTimeline />
                </div>
                <div>
                  <TwitterTimeline className="px-5"/>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Contents;
