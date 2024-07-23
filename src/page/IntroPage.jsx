function IntroPage(){
    return(
        <>
        <div className="leftContainer">
            <div className="myInfoBox">
                <div className="infoSubject">
                    ABOUT ME
                </div>
                <div className="infoTopBox">
                    <div className="infoNameBox">
                        <div className="infoImgBox">
                            <img className="starImg" src="./logo.png"/>
                        </div>
                        <div className="infoContentBox">
                            김솔지
                        </div>
                    </div>
                    <div className="infoBirthBox">
                        <div className="infoImgBox">
                            <img className="starImg" src="./logo.png"/>
                        </div>
                        <div className="infoContentBox">
                            1998.09.13
                        </div>
                    </div>
                    <div className="infoEmailBox">
                        <div className="infoImgBox">
                            <img className="starImg" src="./logo.png"/>
                        </div>
                        <div className="infoContentBox">
                            solji913@<br/>daum.net
                        </div>
                    </div>
                </div>
                <div className="infoBottomBox">
                    <div className="univBox">
                        <div className="infoImgBox">
                            <img className="starImg" src="./doctorStar.png"/>
                        </div>
                        <div className="infoContentBox">
                            국립한국교통대학교 <br/> 정보통신로봇공학부 졸업
                        </div>
                    </div>
                    <div className="eduBox">
                        <div className="infoImgBox">
                            <img className="starImg" src="./doctorStar.png"/>
                        </div>
                        <div className="infoContentBox">
                            중앙정보기술인재원 <br/> 웹개발자 6개월 과정 수료
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightContainer">
            <div className="gitBox">
                <div className="urlImg">
                    <img className="iconImg_git" src="./git.png"/>
                </div>
                <div className="urlBox">
                    <a href="https://github.com/soljiiii" target="_blank" className="link">🔗GITHUB</a>
                </div>
                <div className="urlTextBox">
                    프로젝트 소스 코드 저장 및<br/>
                    관리하는 개인 gitHub <br/>계정입니다
                </div>
            </div>
            <div className="notionBox">
                <div className="urlImg">
                    <img className="iconImg" src="./notion.png"/>
                </div>
                <div className="urlBox">
                    <a href="https://www.notion.so/soljiiii/STUDY-571156c64a2c497687e601e28f770c5c" target="_blank" className="link">🔗NOTION</a>
                </div>
                <div className="urlTextBox">
                    배운 내용을 복습하고<br/>
                    궁금한 점을 찾아서 정리하는<br/>개인 공부 계정입니다
                </div>
            </div>
        </div>
        </>
    );
}
export default IntroPage;