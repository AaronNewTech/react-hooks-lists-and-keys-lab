import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log(technologies)
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* {technologies.map(technologies => {
          {technologies ? <span>{technologies}</span> : null}
        })} */}
        {/* {technologies.map((technologies) => {
        return {technologies ? <span>{technologies}</span> : null}
        })} */}
        {technologies[0] ? <span>{technologies[0]}</span> : null}
        {technologies[1] ? <span>{technologies[1]}</span> : null}
        {technologies[2] ? <span>{technologies[2]}</span> : null}
      </div>
    </div>
  );
}

export default ProjectItem;
