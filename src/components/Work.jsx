import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../assets/data.json";

const Work = () => {
  return (
    <div className="work" id="work">
      <h2>Work</h2>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {data.projects.map((item) => (
          <div key={item.name} className="carousel">
            <img src={item.img} alt={item.name} />
            <aside>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <a href={item.src} target="blank">
                Live Demo!
              </a>
            </aside>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Work;
