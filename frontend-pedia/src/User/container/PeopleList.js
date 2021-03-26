import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PeopleList.scss";

export default function ActorList({ data }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 1,
    arrows: true,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <div className="actorWrap">
              <div>
                <img src="/images/profileIcon.jpg" />
              </div>
              <div>
                <span className="actorInfo">{data.name}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
