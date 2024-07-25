function SkillPage(){
    return(
    <div className="skillPageContainer">
        <div className="skillSubject">
            SKILL
        </div>
        <div className="skillBox">
            <div className="frontBox">
                <div className="HTMLBox skillItem">
                    <div className="logoImgBox">
                        <img className="html" src="./html.png"/>
                        <span className="tooltip">마크업 언어를 이용하여 프로젝트의 골격을 설계할 수 있습니다.</span>
                    </div>
                </div>
                <div className="CSSBox skillItem">
                    <div className="logoImgBox">
                        <img className="css" src="./css.png"/>
                        <span className="tooltip">프로젝트의 레이아웃과 스타일링을 구현할 수 있습니다.</span>
                    </div>
                </div>
                <div className="JSBox skillItem">
                    <div className="logoImgBox">
                        <img className="js" src="./js.png"/>
                        <span className="tooltip">ES6 문법을 이해하고 있으며, 이를 활용하여 동적 기능을 추가할 수 있습니다.</span>
                    </div>
                </div>
                <div className="jqueryBox skillItem">
                    <div className="logoImgBox">
                        <img className="jquery" src="./jquery.png"/>
                        <span className="tooltip">jQuery 라이브러리를 이용하여 이벤트처리를 할 수 있습니다.</span>
                    </div>
                </div>
                <div className="reactBox skillItem">
                    <div className="logoImgBox">
                        <img className="react" src="./react.png"/>
                        <span className="tooltip">컴포넌트 기반 아케텍처와 상태관리를 이해하고 있으며, 이를 이용해 프로젝트를 작성 가능합니다.</span>
                    </div>
                </div>
            </div>
            <div className="backBox">
                <div className="javaBox skillItem">
                    <div className="logoImgBox">
                        <img className="java" src="./java.png"/>
                        <span className="tooltip">객체지향 개념을 이해하고 있습니다.</span>
                    </div>
                </div>
                <div className="springBootBox skillItem">
                    <div className="logoImgBox">
                        <img className="spring" src="./spring.png"/>
                        <span className="tooltip">RESTful API 설계 및 데이터베이스 연동을 할 수 있고, 이를 이용해 CRUD 프로젝트를 작성 가능합니다.</span>
                    </div>
                </div>
                <div className="mySQLBox skillItem">
                    <div className="logoImgBox">
                        <img className="mysql" src="./mysql.png"/>
                        <span className="tooltip">데이터베이스를 관리하기 위한 기본적인 SQL 쿼리를 작성할 수 있습니다.</span>
                    </div>
                </div>
                <div className="oracleBox skillItem">
                    <div className="logoImgBox">
                        <img className="oracle" src="./oracle.png"/>
                        <span className="tooltip">데이터베이스를 관리하기 위한 기본적인 SQL 쿼리를 작성할 수 있습니다.</span>
                    </div>
                </div>
                <div className="myBatis skillItem">
                    <div className="logoImgBox">
                        <img className="mybatis" src="./mybatis.png"/>
                        <span className="tooltip">데이터베이스 매핑 프레임워크를 이해하고 있고, 이를 이용해 데이터베이스를 연동하여 프로젝트 구현할 수 있습니다.</span>
                    </div>
                </div>
            </div>
            <div className="etcBox">
                <div className="gitHubBox skillItem">
                    <div className="logoImgBox skillItem">
                        <img className="git" src="./git.png"/>
                        <span className="tooltip">SourceTree를 사용하여 직관적인 GUI 환경에서 버전 관리를 수행하고, Git Bash를 통해 CLI 환경에서 직접 Git 명령어를 사용하여 커밋 및 푸시 작업을 처리할 수 있습니다.</span>
                    </div>
                </div>
                <div className="figmaBox skillItem">
                    <div className="logoImgBox">
                        <img className="figma" src="./figma.png"/>
                        <span className="tooltip">figma를 이용하여 프로젝트의 전체적인 디자인과 구조를 그릴 수 있습니다.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default SkillPage;