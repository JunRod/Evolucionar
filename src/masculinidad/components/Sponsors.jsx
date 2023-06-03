import { useEffect, useState } from "react";
import { ContainerArticle, Descripcion, DescriptionArticle, FeaturedArticle, ImgArticle, MainArticle, SocialRedesArticle, TitleArtitle } from "../../styles/SponsorStyle"
import { sponsors } from "../data/sponsors";
import { SocialRedes } from "../ui/SocialRedes";

export const Sponsors = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {

    const interval = setTimeout(() => {
      setShow(false);
    }, 5500);
  
    return () => {
      clearTimeout(interval)
    }
  }, [])
  

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5500);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <ContainerArticle className={`animate__animated ${show ? "animate__fadeIn" : "animate__fadeOut" }`}>
      <ImgArticle>
        <img src={sponsors[currentIndex].photo}/>
      </ImgArticle>
      <MainArticle>
        <TitleArtitle>
          {sponsors[currentIndex].name}
          <FeaturedArticle>
            Descatado
          </FeaturedArticle>
        </TitleArtitle>
        <DescriptionArticle>
          <Descripcion>
          {sponsors[currentIndex].description}
          </Descripcion>
          
          <SocialRedesArticle>
            <SocialRedes currentIndex={currentIndex}/>
          </SocialRedesArticle>
        </DescriptionArticle>

      </MainArticle>
    </ContainerArticle>
  )
}