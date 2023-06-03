import { ContainerLink } from "../../styles/SocialRedesStyles";
import { sponsors } from "../data/sponsors";

const diccionary = {
  instagram: "/images/instagram.svg",
  twitter: "/images/twitter.svg",
  facebook: "/images/facebook.svg",
  web: "/images/web.svg",
  youtube: "/images/youtube.svg",
};

export const SocialRedes = ({ currentIndex }) => {
  return Object.keys(sponsors[currentIndex].socialRedes).map((key) => {
    const socialRedesCurrentObject = sponsors[currentIndex].socialRedes;

    if (!socialRedesCurrentObject[key].length > 0) return;

    return (
      <ContainerLink href={socialRedesCurrentObject[key]} target="_blank">
        <img src={diccionary[key]} />
      </ContainerLink>
    );
  });
};
