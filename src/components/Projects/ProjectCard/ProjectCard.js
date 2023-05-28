import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  console.log(ProjectList.tech_stack)
  console.log(ProjectList.demo_url)
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span style={{whiteSpace:"nowrap"}} className="stackTitle">Technologies -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            {list.github_url!==undefined || list.demo_url!==undefined?
            <BtnGroup>
            {list.github_url !== undefined?
              <a
                className="btn btn2 SecondarBtn"
                href={"/"+list.demo_url}
                target="_blank"
                // rel="noopener noreferrer"
              >
                Github
              </a>:
              <></>
            }
            {list.demo_url !== undefined?
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>:<></>
              } 
            </BtnGroup>:<></>}
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
