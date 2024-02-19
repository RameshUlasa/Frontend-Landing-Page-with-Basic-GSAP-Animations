import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import only ScrollTrigger
import "./index.css";

const ServicesPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".service-list").forEach((service, index) => {
      gsap.to(service.querySelector(`.w${index + 1}`), {
        scrollTrigger: {
          trigger: service.querySelector(`.w${index + 1}`),
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none",
        },
        duration: 5,
        scale: 0.7,
        ease: "elastic",
      });
    });
  }, []);

  return (
    <div>
      <div className="service-list fint">
        <img
          className="work-img w1"
          src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
          alt="work-1"
        />
        <div className="service-content o-1">
          <h3 className="service-name">Finech Solution</h3>
          <p className="service-subtitle">Transforming Fintech with AI</p>
          <div className="service-tags">
            <span className="tag">Fraud detection</span>
            <span className="tag">Transaction categorisation</span>
            <span className="tag">Risk Scoring</span>
          </div>
          <p className="description">
            Empower your financial institution with our advanced fintech
            solutions. From real-time fraud detection to easy bookkeeping, our
            software development services provide credit risk scoring for
            accurate lending eligibility, transaction categorization for
            seamless organization, and anomaly detection to safeguard your
            assets
          </p>
          <div className="btn-card">
            <a className="btn" href="#">
              <span>
                See full case study <BsArrowRight className="arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="service-list service-list-azure iot">
        <img
          className="work-img w2"
          src="	https://geeksinvention.com/assets/v3/industry-iot.webp"
          alt="work-2"
        />
        <div className="service-content">
          <h3 className="service-name">Industrial IoT</h3>
          <p className="service-subtitle">
            Providing a better connected experience
          </p>
          <div className="service-tags">
            <span className="tag">Connected manufacturing</span>
            <span className="tag">Aviation</span>
            <span className="tag">Smart Building</span>
          </div>
          <p className="description">
            Revolutionize your industry with our innovative IoT solutions. Our
            software development services offer connected manufacturing,
            pollution control, smart transportation, and intelligent farming,
            agriculture, and forestry. With our expertise, you can harness the
            power of technology to increase efficiency, reduce waste, and
            optimize operations for a sustainable future.
          </p>
          <div className="btn-card">
            <a className="btn" href="#">
              <span>
                See full case study <BsArrowRight className="arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="service-list service-list-black education">
        <img
          className="work-img w3"
          src="https://geeksinvention.com/assets/v3/industry-education.webp"
          alt="work-3"
        />
        <div className="service-content">
          <h3 className="service-name">Smart Education</h3>
          <p className="service-subtitle">Elevate your Education Institution</p>
          <div className="service-tags">
            <span className="tag">Fraud detection</span>
            <span className="tag">Transaction categorisation</span>
            <span className="tag">Risk Scoring</span>
          </div>
          <p className="description">
            Elevate your education institution with our comprehensive software
            solutions. Learning management, course offerings, professional
            training, certification, and school management tools to streamline
            your operations and enhance your students' learning experience.
            Trust us to provide the cutting-edge technology and support you need
            to thrive in the ever-evolving education industry.
          </p>
          <div className="btn-card">
            <a className="btn" href="#">
              <span>
                See full case study <BsArrowRight className="arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
