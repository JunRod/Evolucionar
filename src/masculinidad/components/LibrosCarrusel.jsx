import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setDataSlice, setDataVisualization, setIsHoverCarousel } from "../../store/masculinidad";
import { useNavigate } from "react-router-dom";
import { devices } from "../global/valores";

const ConteinerCarousel = styled.div`
    z-index: 5;
    position: absolute;
    width: 100%;

    button {
        display: none !important;
    }

    @media ${devices.mobileS} {
      top: 60px;
      width: 70%;
  }

  @media ${devices.tablet} {
    width: 100%;
    top: 0;
  }


`;

const Imagen = styled.img`
  padding-left: 2vh;
  cursor: pointer;
  clip-path: inset(8% 0% 3% 0%);
  height: 150px;

  @media ${devices.mobileS} {
    height: 100px;
  }

  @media ${devices.tablet} {
    height: 150px;
  }


`;

export const LibrosCarrusel = () => {
    const { data } = useSelector((state) => state.masculinidad);

    const [forzedLoading, setForzedLoading] = useState(Date.now());
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let dataCarousel = [];

    for (const key in data) {
        dataCarousel.push(...data[key].slice(0, 5));
    }

    const onClickSlice = ({ image, title, seccion, descripcion }) => {
        dispatch(setDataVisualization({ image, title, seccion, descripcion }));

        const wordConvert = seccion.toLowerCase();
        dispatch(setDataSlice(data[wordConvert]));

        navigate(`/${wordConvert}/1`);
    };

    const onHover = () => {
        dispatch(setIsHoverCarousel(true))
    }
    const onHoverExit = () => dispatch(setIsHoverCarousel(false))

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
            <ConteinerCarousel
                key={forzedLoading}
            >
                <Slider
                    {...settings}
                >
                    {SlicesCarousel()}
                </Slider>
            </ConteinerCarousel>
        </>
    );
};
