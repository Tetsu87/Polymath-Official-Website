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
        <a id="team" className="header-adjustment link-style-deactivate">
          {" "}
          Meet The Team
        </a>
      </div>

      <Members />

      <div className="subTitle mt-5 mb-4">
        <a id="value" className="header-adjustment link-style-deactivate">
          Why Polymath?
        </a>
      </div>

      <div className="why-polymath px-5">
        <div className="merits mb-3">Polymathは最新の情報を持っています</div>
        <p>
          私達はニューヨークとロサンゼルスを拠点とし、米国大学留学・就職における情報戦の最前線にいます。現地のアドミッション、現役大学生、卒業生のネットワークを通じて常に最新の動向を把握しています。
        </p>

        <div className="merits mb-3">​米国の第一線エンジニアによる指導</div>
        <p>
          米国の第一線で活躍するエンジニア陣があなたの留学をバックアップします。アドバイザーは現役のデータサイエンティスト、ビッグデータエンジニア、デリバティブトレーダー、現役CS大学院生なので、テクニカルなエッセイの添削が可能です。
        </p>
        <p>
          例えば、「AIに興味があります」というエッセイと、「トレーディングフロアのチャット履歴を使ってオプション・プライスを予測する深層学習GPT-3モデル構築したいので、ヤン・ルカン教授とデビッド・ローゼンバーグ教授の授業を履修予定です」というエッセイではどちらが大学のアドミッションを唸らせるかは一目瞭然でしょう。
        </p>
        <div className="merits mb-3">​チームであなたの成功にコミットします</div>
        <p>
          他の留学斡旋会社とは異なり、Polymathではチームであなたの留学をサポートします。専門知識を有する複数のアドバイザーと何度もディスカッションを重ねていくことで、合格の可能性を限りなく高めることができるためです。私達は一切妥協をしません。徹底的に話し合いを重ねて一緒に合格を勝ち取りましょう。
        </p>
        <div className="merits mb-3">アドバイザー全員が米国理系大学院卒</div>
        <p>
          実際に経験をした人のみが専門性の高いアドバイスをすることができます。Polymathのアドバイザー陣は全員が米国理系大学院卒なので、実体験に基づく、本やウェブサイトに載っていないような留学のリアルをお伝え致します。
        </p>
      </div>

      <div className="achievements pale-background pt-5">
        <div className="subTitle">
          <a
            id="achievements"
            className="header-adjustment link-style-deactivate"
          >
            Achievements
          </a>
        </div>
        <p className="text-center">直近3年間実績</p>

        <div className="univ_logo_wrapper py-3">
          <img src={columbia} className="univ_logo" />
          <img src={usc} className="univ_logo" />
          <img src={uw} className="univ_logo" />
          <img src={georgiatech} className="univ_logo" />
          <img src={nyu} className="univ_logo" />
          <img src={texastech} className="univ_logo" />
        </div>

        <div className="achievements_list px-3 pb-5">
          <div className="ul_align_center py-3">
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
      </div>

      <div className="contact bg-primary text-light pt-3 pb-5">
        <div className="subTitle text-light my-3">
          <a id="contact" className="header-adjustment link-style-deactivate">
            Contact
          </a>
        </div>
        <Contact />
      </div>

      <div className="py-3">
        <div className="subTitle">
          <a id="social" className="header-adjustment link-style-deactivate">
            Social
          </a>
        </div>
        <MediaQuery query="(max-width: 767px)">
          <div className="social-smartphone">
            <NoteTimeline />
            <TwitterTimeline />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div className="social-pc">
            <NoteTimeline />
            <TwitterTimeline />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Contents;
