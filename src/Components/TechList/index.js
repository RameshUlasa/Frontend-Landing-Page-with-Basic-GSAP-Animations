import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

const TechList = (props) => {
  const { eachTech } = props;
  const { name, imgUrl } = eachTech;

  const techItemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const techItem = techItemRef.current;
    const techBorder = techItem.querySelector(".tech-border");

    const onMouseEnter = () => {
      gsap.to(techItem, { scale: 1.1, duration: 0.3, ease: "power3.inOut" });
      gsap.to(techBorder, { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(techItem, { scale: 1, duration: 0.3, ease: "power3.inOut" });
      gsap.to(techBorder, { opacity: 0, duration: 0.3 });
    };

    techItem.addEventListener("mouseenter", onMouseEnter);
    techItem.addEventListener("mouseleave", onMouseLeave);

    return () => {
      techItem.removeEventListener("mouseenter", onMouseEnter);
      techItem.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [techItemRef]);

  return (
    <li ref={techItemRef} className="techItem">
      <div className="tech-border"></div>
      <img className="tech-logo" src={imgUrl} alt={name} />
      <p className="tech-name">{name}</p>
    </li>
  );
};

export default TechList;
