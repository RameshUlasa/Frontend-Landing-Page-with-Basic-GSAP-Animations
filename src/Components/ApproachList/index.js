import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

const ApproachList = (props) => {
  const { eachTech } = props;
  const { name, imgUrl } = eachTech;
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      itemRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(itemRef.current, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(itemRef.current, { scale: 0.8, duration: 0.3 });
  };

  return (
    <li
      className="a-Item"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="a-logo" src={imgUrl} alt={name} />
      <p className="a-name">{name}</p>
    </li>
  );
};

export default ApproachList;
