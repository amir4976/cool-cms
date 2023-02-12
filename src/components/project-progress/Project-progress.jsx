import React, { useState, useEffect } from "react";
import "./Project-prosess.css";
export default function ProjectProgress() {
  let [progress, setProgress] = useState(0);
  let [ActiveProject, setActiveProject] = useState(69);
  let [undoneProject, setUndoneProject] = useState(43);
  useEffect(() => {
    let cul = Math.round((undoneProject / ActiveProject) * 100);
    setProgress(cul);
  }, [ActiveProject]);
  return (
    <div className="project-process-container">
      <div className="project-process">
        <div className="active-projects">
          <span className="active-project-Number">{ActiveProject}</span>
          <span className="active-project-Title">پروژه فعال</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-info">
            <span>{undoneProject}درحال انتظار</span>
            <span>{progress} %</span>
          </div>

          <div className="progress-sec" >
            <div className="progressBar-container">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
