import ikkei from "./images/ikkei.jpg";
import kai from "./images/kai.jpg";
import alex from "./images/alex.png";
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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Text from "react-bootstrap-text";
import MediaQuery from "react-responsive";

function Contents() {
  return (
    <div>
      <MediaQuery query="(max-width: 767px)">
        <div className="intro-center">
          <div className="intro-smartphone mt-4 px-3 text-justify">
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
      <div className="subTitle pale-background py-5 mt-5 px-3">
        <a id="team"> Meet The Team</a>
      </div>

      <Container fluid className="pale-background pb-5">
        <Row>
          <Col>
            <div className="profile-wrapper">
              <div className="profile">
                <img src={ikkei} className="headshot" />
                <div className="medium-letter mt-4">井徳一慶</div>
                <div className="small-letter font-bold my-1">
                  Machine Learning Scientist
                </div>
                <div className="small-letter font-bold">@ Amazon</div>
              </div>
              <div className="small-letter profile-width px-3">
                <p>
                  高校卒業後に渡米。１８年間、米国でキャリア形成をしてきました。ベンチャー、ブルームバーグ、J.P.
                  Morganを経て、現在はAmazonニューヨークでAIの研究開発に従事しています。​
                </p>

                <p>
                  私自身、学士→修士→そして４回の就職・転職を経験し、ステップアップを倍々ゲームのように実現してきました。その度に人生が大きく開けていくことを実感しました。その経験を元に、家族・友人の留学をサポートしてきました。私の弟や、Polymathメンバーの甲斐もその一人です。同僚の推薦状を書いたり、某留学斡旋会社でアドバイザー経験もあります。
                </p>

                <p>
                  留学は情報と戦略が全てです。学校選びはもちろん、エッセイと推薦状で自分の事を360°多角的にアピールする戦略が大切です。素晴らしい経験をしていても、英語で効果的に伝えることが出来なければ合格できません。私自身、コロンビア大学院進学時は２５人のアメリカ人にエッセイの添削をお願いしたほどです。その中でも際立って論理的で小説のように美しい文体に添削してくれたのがPolymathメンバーのアレックスでした。
                </p>

                <p>
                  ​
                  私達は米国GAFAMや投資銀行で働く現職エンジニアです。その３人が一丸となってあなたの留学をサポートさせて頂きます。留学を成功させ、私達と一緒にニューヨークやシリコンバレーで働きましょう！
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="profile-wrapper">
              <div className="profile">
                <img src={kai} className="headshot" />
                <div className="medium-letter mt-4">甲斐徹郎</div>
                <div className="small-letter font-bold my-1">
                  Computer Science
                </div>
                <div className="small-letter font-bold my-1">
                  @ University of Southern
                </div>
                <div className="small-letter font-bold my-1">California</div>
              </div>
              <div className="small-letter profile-width px-3">
                <p>
                  東工大院卒。大手金融機関にてデリバティブ・トレーダーとして10年間勤務。ニューヨーク駐在時にサーフィンを通じてPolymathのメンバーと出会う。未経験ながら複数の米国コンピューターサイエンス修士に合格。現在はLAの南カリフォルニア大学院に在籍。
                </p>
                <p>
                  自身の大学院留学ではPrerequisitesを満たしていなかったものの、Polymathメンバーの熱心なサポートのお陰で第一志望校から合格を勝ち取ることが出来ました。留学に向けての道のりは本当に大変だと思います。エッセイを一人で一日中考えても一行も進まない・・・というのはざらにあることだと思います。
                </p>
                <p>
                  そんな時、メンターの助言が大きなヒントになることがあります。その大事さを私たちは熟知しています。このような経験をしたからこそ、第一線で活躍する専門家のアドバイスの大事さを知り、その経験を世の中に広く提供したいとの思いで3人で本サービスを始めました。
                </p>
                <p>
                  「日本人にもっと世界で活躍してほしい。活躍できるはず！」それが私たちの信念です。皆様の挑戦のお手伝いが出来ることを楽しみにしています。合格後は一緒に喜びを分かち合い、共に励まし合い、グローバルに頑張りましょう！
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="profile-wrapper">
              <div className="profile">
                <img src={alex} className="headshot" />
                <div className="medium-letter mt-4">アレックスコム</div>
                <div className="small-letter font-bold my-1">
                  Data Science Manager
                </div>
                <div className="small-letter font-bold">@ J.P.Morgan</div>
              </div>
              <div className="small-letter profile-width px-3">
                <p className="text-justify">
                  ブルームバーグ、ドイツ銀行、プロップトレーダー、データサイエンス講師、ビッグデータコンサルタント等を経て、現在はニューヨークのJ.P.
                  Morganでデータサイエンスチームのマネージャーを務めています。技術遷移の早いAI業界の中で、最新の技術の現場応用を率先して行っています。
                </p>
                <p>
                  エンジニアとしてのキャリアを歩む傍ら、機械学習に関する本の執筆活動もしてきました。『Python
                  Machine Learning
                  Blueprints』は実務に裏打ちされた分かりやすくて為になる専門書として、多くのデータサイエンティストから好評を頂いております。
                </p>

                <p>
                  トップ校の理系学部に合格するには専門性と論理性そして表現力も必要です。私は小さい頃から多くの文学書に親しんできました。そのためか、私の英語は流れるような美しい文体と誉められます。
                  いままでに数多くの日本人・ネイティブの友人達からエッセイのチェックを依頼され、それらの魅力を最高のレベルまで引き出してきました。
                </p>

                <p>
                  Polymathでは他のメンバーと協力しながら進路に関する最新の情報の提供と共に、主にエッセイと推薦状の編集・添削を担当します。私はエンジニア兼文筆家としてあなたに多彩なアドバイスができるでしょう！
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="subTitle mt-5 mb-4">
        <a id="value">Why Polymath?</a>
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
          <a id="achievements">Achievements</a>
        </div>
        <p className="text-center">直近3年間実績</p>

        <div className="univ_logo_wrapper">
          <img src={columbia} className="univ_logo" />
          <img src={usc} className="univ_logo" />
          <img src={uw} className="univ_logo" />
          <img src={georgiatech} className="univ_logo" />
          <img src={nyu} className="univ_logo" />
          <img src={texastech} className="univ_logo" />
        </div>

        <div className="achievements_list pb-5">
          <div className="ul_align_center py-5">
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
          <a id="contact">Contact</a>
        </div>
        <Contact />
      </div>

      <div className="py-3">
        <div className="subTitle">
          <a id="social">Social</a>
        </div>
        <MediaQuery query="(max-width: 767px)">
          <div className="social-smartphone">
            <TwitterTimeline />
            <NoteTimeline />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div className="social-pc">
            <TwitterTimeline />
            <NoteTimeline />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Contents;
