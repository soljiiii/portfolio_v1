import ProjectBox from "../component/ProjectBox";

function ProjectPage(){
    return(
        <>
            <div className="projectSubject">
                PROJECT
            </div>
            <div className="project1">
                <ProjectBox
                    state={1}
                />
            </div>
            <div className="project2">
                <ProjectBox
                    state={2}
                />
            </div>
            <div className="project3">
                <ProjectBox
                    state={3}
                />
            </div>
        </>
    );
}
export default ProjectPage;