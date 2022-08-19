import ikkei from "./images/ikkei.jpg";
import kai from "./images/kai.jpg";
import alex from "./images/alex.png";
import "./Members.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";

function Members() {
  return (
    <div className="pale-background">
      <MediaQuery query="(max-width: 767px)">
      <div className="members-container">
          <div className="members-width-sp">
            <div className="member-container-sp">
              <div className="member-width-sp">
                <div className="member-profile-container">
                  <img src={ikkei} className="headshot" />
                  <div className="medium-letter mt-4">井徳一慶</div>
                  <div className="small-letter font-bold my-1">
                    Machine Learning Scientist
                  </div>
                  <div className="small-letter font-bold my-1">@ Amazon</div>
                  <div className="small-letter px-4">
                    <p>
                      高校卒業後に渡米。18年間、米国でキャリア形成をしてきました。ベンチャー、ブルームバーグ、J.P.
                      Morganを経て、現在はAmazonニューヨークでAIの研究開発に従事しています。
                    </p>

                    <p>
                      私自身、学士→修士→そして4回の就職・転職を経験し、ステップアップを倍々ゲームのように実現してきました。その度に人生が大きく開けていくことを実感しました。その経験を元に、家族・友人の留学をサポートしてきました。私の弟や、Polymathメンバーの甲斐もその一人です。同僚の推薦状を書いたり、某留学斡旋会社でアドバイザー経験もあります。
                    </p>

                    <p>
                      留学は情報と戦略が全てです。学校選びはもちろん、エッセイと推薦状で自分の事を360°多角的にアピールする戦略が大切です。素晴らしい経験をしていても、英語で効果的に伝えることが出来なければ合格できません。私自身、コロンビア大学院進学時は25人のアメリカ人にエッセイの添削をお願いしたほどです。その中でも際立って論理的で小説のように美しい文体に添削してくれたのがPolymathメンバーのアレックスでした。
                    </p>

                    <p>
                      私達は米国GAFAMや投資銀行で働く現職エンジニアです。その3人が一丸となってあなたの留学をサポートさせて頂きます。留学を成功させ、私達と一緒にニューヨークやシリコンバレーで働きましょう！
                    </p>

                  
                  </div>
                </div>
              </div>
              <div className="member-width-sp">
                <div className="member-profile-container">
                  <img src={kai} className="headshot" />
                  <div className="medium-letter mt-4">甲斐徹郎</div>
                  <div className="small-letter font-bold my-1">
                    Computer Science
                  </div>
                  <div className="small-letter font-bold my-1">
                    @ University of Southern
                  </div>
                  <div className="small-letter font-bold my-1 pb-2">California</div>
                  <div className="small-letter px-4">
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
              </div>
              <div className="member-width-sp">
                <div className="member-profile-container">
                  <img src={alex} className="headshot" />
                  <div className="medium-letter mt-4">アレックスコム</div>
                  <div className="small-letter font-bold my-1">
                    Data Science Manager
                  </div>
                  <div className="small-letter font-bold my-1">@ J.P.Morgan</div>
                  <div className="small-letter px-4">
                    <p className="text-justify">
                      ブルームバーグ、ドイツ銀行、プロップトレーダー、データサイエンス講師、ビッグデータコンサルタント等を経て、現在はニューヨークのJ.P.
                      Morganでデータサイエンスチームのマネージャーを務めています。技術遷移の早いAI業界の中で、最新の技術の現場応用を率先して行っています。
                    </p>

                    <p>
                      エンジニアとしてのキャリアを歩む傍ら、機械学習に関する本の執筆活動もしてきました。
                      <a
                        href="https://www.amazon.com/Python-Machine-Learning-Blueprints-developing-ebook/dp/B07JLMHWRG"
                        target="_blank"
                        className="book-link"
                      >
                        『Python Machine Learning Blueprints』
                      </a>
                      は実務に裏打ちされた分かりやすくて為になる専門書として、多くのデータサイエンティストから好評を頂いております。
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
              </div>
            </div>
          </div>
        </div>

      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div className="members-container">
          <div className="members-width">
            <div className="member-container">
              <div className="member-width">
                <div className="member-profile-container">
                  <img src={ikkei} className="headshot" />
                  <div className="medium-letter mt-4">井徳一慶</div>
                  <div className="small-letter font-bold my-1">
                    Machine Learning Scientist
                  </div>
                  <div className="small-letter font-bold my-1">@ Amazon</div>
                  <div className="small-letter font-bold my-1 pb-2 invisible">California</div>
                  <div className="small-letter member-width px-1">
                    <p>
                      高校卒業後に渡米。18年間、米国でキャリア形成をしてきました。ベンチャー、ブルームバーグ、J.P.
                      Morganを経て、現在はAmazonニューヨークでAIの研究開発に従事しています。
                    </p>

                    <p>
                      私自身、学士→修士→そして4回の就職・転職を経験し、ステップアップを倍々ゲームのように実現してきました。その度に人生が大きく開けていくことを実感しました。その経験を元に、家族・友人の留学をサポートしてきました。私の弟や、Polymathメンバーの甲斐もその一人です。同僚の推薦状を書いたり、某留学斡旋会社でアドバイザー経験もあります。
                    </p>

                    <p>
                      留学は情報と戦略が全てです。学校選びはもちろん、エッセイと推薦状で自分の事を360°多角的にアピールする戦略が大切です。素晴らしい経験をしていても、英語で効果的に伝えることが出来なければ合格できません。私自身、コロンビア大学院進学時は25人のアメリカ人にエッセイの添削をお願いしたほどです。その中でも際立って論理的で小説のように美しい文体に添削してくれたのがPolymathメンバーのアレックスでした。
                    </p>

                    <p>
                      私達は米国GAFAMや投資銀行で働く現職エンジニアです。その3人が一丸となってあなたの留学をサポートさせて頂きます。留学を成功させ、私達と一緒にニューヨークやシリコンバレーで働きましょう！
                    </p>
                  </div>
                </div>
              </div>
              <div className="member-width">
                <div className="member-profile-container">
                  <img src={kai} className="headshot" />
                  <div className="medium-letter mt-4">甲斐徹郎</div>
                  <div className="small-letter font-bold my-1">
                    Computer Science
                  </div>
                  <div className="small-letter font-bold my-1">
                    @ University of Southern
                  </div>
                  <div className="small-letter font-bold my-1 pb-2">California</div>
                  <div className="small-letter member-width px-1">
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
              </div>
              <div className="member-width">
                <div className="member-profile-container">
                  <img src={alex} className="headshot" />
                  <div className="medium-letter mt-4">アレックスコム</div>
                  <div className="small-letter font-bold my-1">
                    Data Science Manager
                  </div>
                  <div className="small-letter font-bold my-1">@ J.P.Morgan</div>
                  <div className="small-letter font-bold my-1 pb-2 invisible">California</div>
                  <div className="small-letter member-width px-1">
                    <p className="text-justify">
                      ブルームバーグ、ドイツ銀行、プロップトレーダー、データサイエンス講師、ビッグデータコンサルタント等を経て、現在はニューヨークのJ.P.
                      Morganでデータサイエンスチームのマネージャーを務めています。技術遷移の早いAI業界の中で、最新の技術の現場応用を率先して行っています。
                    </p>
                    <p>
                      エンジニアとしてのキャリアを歩む傍ら、機械学習に関する本の執筆活動もしてきました。
                      <a
                        href="https://www.amazon.com/Python-Machine-Learning-Blueprints-developing-ebook/dp/B07JLMHWRG"
                        target="_blank"
                        className="book-link"
                      >
                        『Python Machine Learning Blueprints』
                      </a>
                      は実務に裏打ちされた分かりやすくて為になる専門書として、多くのデータサイエンティストから好評を頂いております。
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
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Members;
