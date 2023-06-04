import { useSelector } from "react-redux";
import styled from "styled-components";
import { ToolTipJsx } from "./ToolTipJsx";
import { devices, sizes } from "../../styles/valores.js";
import { slide as Menu } from "react-burger-menu";
import { styles } from "../../styles/menuStyles.js";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Buscador } from "./Buscador";
import { SectionsRight } from "./SectionRight";
import { SectionsLeft } from "./SectionLeft";
import {
  ContainerSections,
  ContainerSectionsMenu,
  DisplaySmall,
  Name,
  Nav,
  Photo,
  SectionTwo,
} from "../../styles/NavBarStyles";

export const Navbar = () => {
  const { displaySearch } = useSelector((state) => state.masculinidad);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < parseInt(sizes.laptop));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Nav>
      <Logo />
      {!isVisible ? <Buscador /> : null}

      <ContainerSections displaySearch={displaySearch}>
        <SectionsLeft />
        <SectionsRight />
      </ContainerSections>

      <SectionTwo>
        <ToolTipJsx id={"tooltip"} item={"navbar"} />
        <Name id="tooltip" data-tooltip-delay-hide={5000}>
          USUARIO
        </Name>
        <Photo id="tooltip" data-tooltip-delay-hide={5000} />

        <ContainerSectionsMenu>
          <Menu width={200} right styles={styles}>
            {SectionsLeft()}
            {SectionsRight()}
          </Menu>
        </ContainerSectionsMenu>
      </SectionTwo>
      {isVisible ? (
        <DisplaySmall displaySearch={displaySearch}>
          <Buscador />
        </DisplaySmall>
      ) : null}
    </Nav>
  );
};
