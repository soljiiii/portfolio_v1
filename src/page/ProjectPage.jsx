import ProjectBox from "../component/ProjectBox";

function ProjectPage(){
    return(
        <>
            <div className="projectSubject">
                PROJECT
            </div>
            <div className="project1">
                <ProjectBox/>
            </div>
            <div className="project2">
                <ProjectBox/>
            </div>
            <div className="project3">
                <ProjectBox/>
            </div>
        </>
    );
}
export default ProjectPage;