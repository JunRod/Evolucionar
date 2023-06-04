import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  setDataSlice,
  setDataVisualization,
  setIsHoverCarousel,
} from "../../store/masculinidad";
import { useNavigate } from "react-router-dom";
import { ConteinerCarousel, Imagen } from "../../styles/LibrosCarruselStyles";

export const LibrosCarrusel = () => {
  const { data } = useSelector((state) => state.masculinidad);

  const [forzedLoading, setForzedLoading] = useState(Date.now());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let dataCarousel = [];

  for (const key in data) {
    dataCarousel.push(
      ...data[key].slice(0, 5).filter((object) => object.title !== "Titulo")
    );
  }

  const onClickSlice = ({ image, title, seccion, descripcion }) => {
    dispatch(setDataVisualization({ image, title, seccion, descripcion }));

    const wordConvert = seccion.toLowerCase();
    dispatch(setDataSlice(data[wordConvert]));

    navigate(`/${wordConvert}/1`);
  };

  const onHover = () => {
    dispatch(setIsHoverCarousel(true));
  };
  const onHoverExit = () => dispatch(setIsHoverCarousel(false));

  const SlicesCarousel = () => {
    const slices = dataCarousel.map(
      ({ image, title, seccion, descripcion }) => (
        <Imagen
          onMouseEnter={onHover}
          onMouseLeave={onHoverExit}
          onClick={() => onClickSlice({ image, title, seccion, descripcion })}
          key={forzedLoading}
          src={image}
          alt={title}
        />
      )
    );
    return slices;
  };

  const settings = {
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3800,
    autoplaySpeed: 200,
    cssEase: "linear",
    rows: 2,
  };

  return (
    <>
      <ConteinerCarousel key={forzedLoading}>
        <Slider {...settings}>{SlicesCarousel()}</Slider>
      </ConteinerCarousel>
    </>
  );
};
