import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

const ClientDetailsCard = (props) => {
  const { eachItem } = props;
  const { imgUrl, head, des } = eachItem;

  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const opacityTL = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    opacityTL.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    const rotationTL = gsap.timeline();

    if (isHovered) {
      rotationTL.to(cardRef.current, { rotation: 10, duration: 0.5 });
    } else {
      rotationTL.to(cardRef.current, { rotation: 0, duration: 0.5 });
    }
  }, [isHovered]);

  return (
    <li
      className="client-item"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgUrl} alt={head} className="logo" />
      <p className="item-title">{head}</p>
      <p className="item-des">{des}</p>
    </li>
  );
};

export default ClientDetailsCard;
