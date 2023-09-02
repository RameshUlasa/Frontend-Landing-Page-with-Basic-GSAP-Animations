import { BsArrowRight } from "react-icons/bs";

import ServicesPage from "../ServicesPage";
import ClientDetailsCard from "../ClientDetailsCard";
import TechList from "../TechList";
import ApproachList from "../ApproachList";
import Header from "../Header";
import "./index.css";

const clientsData = [
  {
    id: 1,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-ibm.webp",
    head: "Global Technology",
    des: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.",
  },
  {
    id: 2,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-equity.webp",
    head: "4th Strongest Bank",
    des: "Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region",
  },
  {
    id: 3,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-audi.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 4,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-aramco.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 5,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-insurity.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 6,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-byju.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 7,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-linux.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 8,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-ifit.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 9,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-payyit.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 10,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-baanx.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 11,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-inchcape.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
  {
    id: 12,
    imgUrl: "https://geeksinvention.com/assets/v3/client/logo-penny.webp",
    head: "Intelligence on wheel",
    des: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
  },
];

const techList = [
  {
    id: "13",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg",
    name: "Web",
  },
  {
    id: "14",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg",
    name: "iOS",
  },
  {
    id: "15",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg",
    name: "Android",
  },
  {
    id: "16",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg",
    name: "Hybrid",
  },
  {
    id: "17",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg",
    name: "Wearables",
  },
  {
    id: "18",
    imgUrl:
      "https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg",
    name: "TV",
  },
];

const approachList = [
  {
    id: "19",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg",
    name: "Agile approach",
  },
  {
    id: "20",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg",
    name: "Deep tech expertise",
  },
  {
    id: "21",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg",
    name: "Personal commitment",
  },
  {
    id: "22",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg",
    name: "Regular reporting",
  },
  {
    id: "23",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg",
    name: "Time tracking",
  },
  {
    id: "24",
    imgUrl:
      "https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg",
    name: "Scalability",
  },
];

const HomePage = () => (
  <div className="home-container">
    <Header />
    <div className="welcome-container">
      <h1 className="slogan">EMBRACE THE FUTURE</h1>
      <p className="caption">Welcome to the Age of Action</p>
    </div>
    <ul className="service-card ">
      <ServicesPage />
    </ul>
    <div className="info-container">
      <div className="more-works-card">
        <h2 className="info-head">Check out more works by Geeks Invention</h2>
        <p className="info-text">
          Our case studies describe design and development solutions implemented
          at our Geeks Invention projects. The stories are a valuable resource
          for those looking to develop their own mobile apps.
        </p>
        <a className="btn-orange" href="#">
          <span>
            See all case studies <BsArrowRight className="arrow" />
          </span>
        </a>
      </div>
    </div>
    <ul className="clients-list">
      <div className="info-card">
        <h3 className="info-head">Recent clients</h3>
        <p className="info-text">
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East <br />
          World's 4th Strongest Banking Brand, Automobile & IoT industry
        </p>
      </div>
      <div className="clients-container">
        {clientsData.map((eachItem) => (
          <ClientDetailsCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </div>
    </ul>
    <div className="software-list">
      <div className="info-card">
        <h3 className="info-head">Software for modern platforms</h3>
        <p className="info-text">
          We develop applications for mobile, web, wearables, and TV.
        </p>
      </div>
      <ul className="tech-container">
        {techList.map((eachTech) => (
          <TechList eachTech={eachTech} key={eachTech.id} />
        ))}
      </ul>
      <a className="btn-orange" href="#">
        <span>
          See our tech stack <BsArrowRight className="arrow" />
        </span>
      </a>
    </div>
    <div className="software-list">
      <div className="info-card">
        <h3 className="info-head">Software for modern platforms</h3>
        <p className="info-text">
          We develop applications for mobile, web, wearables, and TV.
        </p>
      </div>
      <ul className="tech-container">
        {approachList.map((eachTech) => (
          <ApproachList eachTech={eachTech} key={eachTech.id} />
        ))}
      </ul>
      <a className="btn-orange" href="#">
        <span>
          See our tech stack <BsArrowRight className="arrow" />
        </span>
      </a>
    </div>
  </div>
);

export default HomePage;
