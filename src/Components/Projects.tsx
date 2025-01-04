import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import '../app/styles/projects.css';

const data = [
  {
    id: 0,
    title: "Rolax-watchs",
    desc: "TypeScript based webside buy now my page women watch world all are your fvrt.",
    img: "/custom-css.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Honda-Sedan",
    desc: "TypeScript powered website buy now my page cars sedan differant colours red, gray, blue black, white etc.",
    img: "/cars-sedans.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
  id: 2,
  title: "E-comerse-web-page",
  desc: "A basic typescript-base data web-page diferent colour design rent for dolars..",
  img: "/templet-7-cars.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
},
  {
    id: 3,
    title: "CV-Resume",
    desc: "A simple  TypeScript data all introduction cv data profile ,skills etc.",
    img: "/resume-cv.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "HubLOT-World",
    desc: "A TypeScript-based watch world women and men buy now,all of differnt colours..",
    img: "/tailwant-css.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
  id: 5,
  title: "Dynamic-Resume",
  desc: " TypeScript based tool for displaying real-time weather data.",
  img: "/dynamic.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
},
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;