import styles from '@/styles/Home/Projects.module.css'

export default function Projects() {
    return (
        <div id='projects' className={styles.container}>
            <h1>My Projects</h1>
            <div className={styles.box}>
                <img id={styles.tastebyyou} src='/Project/tastebyyou.png'/>
                <div className={styles.textBox}>
                    <div className={styles.row}>
                        <h1>TasteByYou (23.08)</h1><p>5인 팀 프로젝트</p>
                    </div>
                    <p>Juction Asia 2023에서 만든 프로젝트입니다.</p>
                    <p>저희 팀이 선택한 트랙인 JAKA Robotics에서 제시한 &lsquo;로봇요리사에 대한 거부감을 줄일 수 있는 플랫폼&rsquo;에 대한 해커톤 결과물입니다.</p>
                    <hr className={styles.horizontalRule}/>
                    <p>주요 기능: <br/>
                        블록코딩 방식을 이용해 사용자가 커스텀한 음식을 로봇에게 주문할 수 있다. 커스텀한 음식을 핀코드를 통해 공유할 수 있으며, 이를 통해 수익을 창출할 수 있다.
                    </p>
                    <p>Github: <a href='https://github.com/Stare-in-dimigo/tastebyyou' target="_blank"
                                  rel="noopener noreferrer">@Stare-in-dimigo/tastebyyou</a>
                    </p>
                    <p>Demo: <a href='https://tastebyyou.sspzoa.io/#/' target="_blank"
                                rel="noopener noreferrer">tastebyyou.sspzoa.io</a></p>
                    <p>App: Flutter, Dart, Firebase</p>
                </div>
            </div>
            <div className={styles.box}>
                <img id={styles.glud} src='/Project/glud.png'/>
                <div className={styles.textBox}>
                    <div className={styles.row}>
                        <h1>글루드 (23.05~)</h1><p>4인 팀 프로젝트</p>
                    </div>
                    <p>STAC 2023에서 만든 프로젝트입니다.</p>
                    <p>최근 ChatGPT 등 AI 기술이 비약적으로 발전하면서 그 속도를 따라가지 못하는 사람들을 위해 프롬프트 엔지니어링 없이 사용할 수 있는 AI 플랫폼을
                        개발하였습니다.</p>
                    <hr className={styles.horizontalRule}/>
                    <p>주요 기능: <br/>
                        사용자가 제공한 정보에 따라서 인터페이스가 설정된다. 콘텐츠는 구성된 인터페이스를 통해 입력되며, 이는 AI가 지정된 형식으로 글을 작성해준다.
                    </p>
                    <p>Github: <a href='https://github.com/Stare-in-dimigo/glud' target="_blank"
                                  rel="noopener noreferrer">@Stare-in-dimigo/glud</a>
                    </p>
                    <p>Demo: <a href='https://glud.sspzoa.io/#/' target="_blank"
                                rel="noopener noreferrer">glud.sspzoa.io</a></p>
                    <p>App: Flutter, Dart, Firebase</p>
                </div>
            </div>
            <div className={styles.box}>
                <img id={styles.monty} src='/Project/monty.png'/>
                <div className={styles.textBox}>
                    <div className={styles.row}>
                        <h1>Monty (22.10~22.11)</h1><p>개인 프로젝트</p>
                    </div>
                    <p>몬티 홀 문제를 수학적으로 이해하는데 어려움을 겪는 사람들을 위해 직관적인 UI와 그래픽으로 이해를 돕기 위해 개발하였습니다.</p>
                    <hr className={styles.horizontalRule}/>
                    <p>주요 기능: <br/>
                        &lsquo;직접 해보기&rsquo;는 몬티 홀 문제를 시뮬레이션하기 위해 사용자 입력을 사용한다. 자동 모드는 실험 결과를 &lsquo;그래픽
                        환경&rsquo; 및 &lsquo;텍스트 환경&rsquo; 두 가지 모드로 제공한다. </p>
                    <p>Github: <a href='https://github.com/sspzoa/monty' target="_blank"
                                  rel="noopener noreferrer">@sspzoa/monty</a>
                    </p>
                    <p>Release: <a href='https://github.com/sspzoa/Monty/releases/tag/v1.1.0' target="_blank"
                                   rel="noopener noreferrer">@sspzoa/Monty/releases/tag/v1.1.0</a></p>
                    <p>App: Android Native, Java</p>
                </div>
            </div>
        </div>
    )
}
