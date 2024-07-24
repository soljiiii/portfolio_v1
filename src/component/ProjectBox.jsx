import { useState } from "react";
import SimpleSlider from "./SimpleSlider";
import { useEffect } from "react";

function ProjectBox({state}){

    const [project,setProject] = useState([]);
    
    const pj1 = ["TEAM PRJ : 팔로팔도",
                "공공 API를 활용하여 지역별 날씨를 보여주고 지역별 캠핑장과 관광지를 추천하는 서비스",
                "HTML|CSS|Javascript|JQuery|JSP|JAVA|SpringBoot|myBatis|mySQL",
                "https://www.notion.so/soljiiii/team1-e6476a60f35048f08c3d33022c20398f"]
    
    const pj2 = ["TEAM PRJ : 밤양갱",
                "webRTC를 이용한 화상채팅 마피아 게임",
                "HTML|CSS|Javascript|React|JAVA|SpringBoot|myBatis|mySQL|JWT-WebRTC-WebSocket",
                "https://www.notion.so/soljiiii/team2-f83c946d56474c7b9b1a982fcdf7c698"]

    const pj3 = ["PERSONAL PRJ : 별들에게 물어봐",
                "webSocket을 이용한 고민상담 채팅 플랫폼",
                "HTML|CSS|Javascript|React|JAVA|SpringBoot|myBatis|mySQL|JWT-WebSocket",
                "https://www.notion.so/soljiiii/personal1-31eea0d5632741ce9859ab7c9c164817"]


    useEffect(()=>{
        if(state===1){
            setProject(pj1);
        }
        else if (state===2){
            setProject(pj2);
        }
        else if (state===3){
            setProject(pj3)
        }
    },[])


    return(
        <div className="projectBox">
            <div className="projectImg">
                <SimpleSlider
                    state={state}
                />
            </div>
            <div className="projectInfo">
                <div className="projectInfoName">{project[0]}</div>
                <div className="projectInfoExplain">{project[1]}</div>
                <div className="projectInfoSkill">{project[2]}</div>
                <div className="projectLinkBox">{project[3]}</div>
            </div>
        </div>
    );
}
export default ProjectBox;