import video from "../../videos/enjoy-bg.mp4";
import coffeeCup from "../../images/icons/coffee-cup.svg";
import "./style.css";
const Enjoy = () => {
  return (
    <section className="enjoy">
      <video
        className="enjoy__background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="enjoy__left">
        <h1 className="enjoy__title">
          <span>Enjoy</span> premium coffee at our charming cafe
        </h1>
        <p className="enjoy__desc">
          With its inviting atmosphere and delicious coffee options, Coffee
          House Resource is a popular destination for coffee lovers.
        </p>
        <a href="/menu" className="enjoy__button">
          <span className="enjoy__button__text">Menu</span>
          <img src={coffeeCup} alt="coffee" />
        </a>
      </div>
    </section>
  );
};

export default Enjoy;
