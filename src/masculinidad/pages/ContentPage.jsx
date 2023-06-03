import { NavLink,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "sonner";
import styled, { css } from "styled-components";
import {
  setDataSlice,
  setDataVisualization,
  setScroll,
} from "../../store/masculinidad";
import { useEffect } from "react";
import { devices } from "../global/valores";
import { Sponsors } from "../components/Sponsors";

const Contenedor = styled.div`
  background-color: ${(props) => props.theme.primario};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 55px 15px;
  gap: 25px;

  height: ${(props) => {
    if (props.displaySearch) {
      return props.dataFilter.length === 0 ? "100vh" : "100%";
    } else {
      return "100%";
    }
  }};

`;

const MessageDataSliceEmpty = styled.div`
  padding: 2vh;
  color: ${(props) => props.theme.secundario};
  font-size: 2.8vh;
  text-align: center;
`;

const Button = styled(NavLink)`
  cursor: pointer;
  width: 8vh;
  height: 5vh;
  background-color: transparent;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  background-color: ${(props) => props.theme.primario};
  font-size: 2.6vh;
  text-align: center;
  color: ${(props) => props.theme.secundario};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }

  &.active {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }
`;

const ContentView = styled.div`

  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
  }

  @media ${devices.tablet} {
    height: 400px;
    flex-direction: row;
  }
`;

const ContentViewDescription = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  position: relative;
  order: 0;
  color: ${(props) => props.theme.secundario};
  font-size: 2.8vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  gap: 5px;

  @media ${devices.mobileS} {
    width: 100%;
    margin-bottom: 15px;
  }

  @media ${devices.tablet} {
    margin-bottom: 0px;
    padding: 25px 0 0 0;
  }
`;

const Placa = styled.i`
  border-radius: 1vh;
  padding: 1.2vh 1.8vh;
  font-size: 2.2vh;

  ${(props) =>
    props.section === "libros"
      ? css`
          background: ${props.theme[props.section]};
          color: ${props.theme.primario};
        `
      : css`
          background: ${props.theme[props.section]};
        `};
`;

const Title = styled.div`
  font-size: 30px;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: normal;
  line-height: 32px;
`;

const Description = styled.div`
  font-size: 2.5vh;
  text-overflow: ellipsis;
  overflow: scroll;

  @media ${devices.mobileS} {
    width: 100%;
    max-height: 200px;
  }

  @media ${devices.tablet} {
    width: 90%;
  }
`;

const ButtonLink = styled(Placa)`
  background-image: linear-gradient(109.6deg, #33a8ec 11.2%, #186be7 91.1%);
  color: ${(props) => props.theme.secundario};
`;

const NavLinkDeleteStyles = styled(NavLink)`
  color: none !important;
  text-decoration: none !important;
`;

const ContainerFrontPage = styled.div`
  position: relative;
  right: 0;
  width: 100%;
  order: 2;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: inset 9vh -11vh 14vh 8vh ${(props) => props.theme.primario},
      inset 9vh -11vh 10vh -4vh ${(props) => props.theme.primario};

    @media ${devices.mobileS} {
      box-shadow: none;
      background: linear-gradient(
          0deg,
          ${(props) => props.theme.primario} 5%,
          transparent 60%
        )
        no-repeat;
    }

    @media ${devices.tablet} {
      box-shadow: inset 9vh -11vh 14vh 8vh ${(props) => props.theme.primario},
        inset 9vh -11vh 10vh -4vh ${(props) => props.theme.primario};
    }

  }

  @media ${devices.mobileS} {
    height: 50%;
  }

  @media ${devices.mobileL} {
    height: 60%;
    width: 60%;
  }

  @media ${devices.mobileXL} {
    height: 50%;
    width: 50%;
  }

  @media ${devices.tablet} {
    height: 100%;
    width: 100%;
  }

`;

const Img = styled.img`
  border-radius: 1vh 1vh 0 0;
  height: 100%;
  width: 100%;
`;

const GridBooks = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  z-index: 90;

  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    display: grid;

  }

  @media ${devices.mobileXL} {
    grid-template-columns: repeat(2, 1fr);
  }


  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);

  }

  @media ${devices.laptopL} {
    grid-template-columns: repeat(5, 1fr);

  }
`;

const CardContainer = styled.div`
  cursor: pointer;
  width: 100%;
  color: #fff;
  text-align: center;
  position: relative;
  height: 100%;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-top: solid 1vh ${(props) => props.theme.secundario};
    border-bottom: solid 1vh ${(props) => props.theme.secundario};
    transition: 0.2s;
    transform: scaleX(0);
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-left: solid 1vh ${(props) => props.theme.secundario};
    border-right: solid 1vh ${(props) => props.theme.secundario};
    transition: 0.2s;
    transform: scaleY(0);
  }

  :hover:before,
  :hover:after {
    transform: scale(1);
  }
`;

const Card = styled.div`
  padding: 1vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  align-items: center;
  height: 100%;

  :hover::before {
    z-index: 40;
    display: flex !important;
  }

  ::before {
    z-index: 40;
    display: none;
    content: "";
    position: absolute;
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
  }

  :hover::after {
    z-index: 93;
    display: flex !important;
  }

  ::after {
    z-index: 93;
    display: none;
    content: "";
    z-index: 100;
    height: 100%;
    width: 100%;
    background-image: url("/images/visible.svg");
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: center;
    position: absolute;
  }

  @media ${devices.mobileS} {
    flex-direction: row;
  }

  @media ${devices.mobileXL} {
    flex-direction: column;
  }
`;

const CardImagen = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

const CardImg = styled.img`
  position: absolute;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const CardTitle = styled.div`
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  text-align: center;
  font-size: 3vh;
  line-height: 25px;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 0.1vh;
`;

const CardDescription = styled.div`
  font-size: 2.3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContenedorPlacas = styled.div`
  padding-bottom: 8px;
  color: white !important;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  ${(props) => {
    if (props.descripcion)
      return css`
        display: flex;
      `;
  }}
`;

const VerMas = styled.div`
  font-size: 2.3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  padding: 0vh 2vh 1vh 2vh;
`;

const Pagination = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const FlexColumnInPhone = styled.div`
  width: 100%;

  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${devices.tablet} {
    gap: 5px;
  }
`;

const Authors = styled.div`
  font-size: 2.5vh;

  @media ${devices.mobileS} {
    width: 100%;
    height: auto;
  }
`;

const ScrollTop = styled.div`
  height: 0px;
  width: 0px;
`

const ContainerImgCenter = styled.div`
  /* display:flex;
  justify-content: center;
  background-repeat: red;
  width: 100%;
  align-items: center;

  @media ${devices.tablet} {s
    display: inline;
    width: 100%;
    height: 100%;
  } */
`


export const ContentPage = () => {
  const dispatch = useDispatch();

  const {
    dataFilter,
    dataVisualization,
    data,
    dataSlice,
    MessageAfterClickOnSearch,
    displaySearch,
    sectionCurrent,
    scroll,
  } = useSelector((state) => state.masculinidad);

  const { section, busquedad = "" } = useParams();

  useEffect(() => {
    let variable = ""
    if(scroll === "view-content") {
      variable = "#view-content"
    } else if (scroll === "scrollTop") {
      variable = "#scrollTop"
    } else {
      return
    }

    document.querySelector(variable).scrollIntoView({ behavior: "smooth" });

    dispatch(setScroll(""));
  }, [scroll, dataVisualization]);

  let corte_one = 0;
  let corte_two = 0;

  const CortarContenido = (index, index_two) => {

    dispatch(setScroll("scrollTop"))

    var variant = dataFilter.length > 0 ? dataFilter : data[sectionCurrent || section];

    const numeroInfoCortador = 12;

    corte_one = index * numeroInfoCortador;
    corte_two = index_two * numeroInfoCortador;

    if (corte_two > variant.length) corte_two = variant.length;

    dispatch(setDataSlice(variant.slice(corte_one, corte_two)));
  };

  const Buttons = () => {
    const buttons = [];
    const variant =
      dataFilter.length > 0
        ? dataFilter
        : data[sectionCurrent || section] || [];

    if (busquedad.length < 1 && section === undefined) return [];

    for (let index = 0; index < Math.ceil(variant.length / 12); index++) {
      const newButton = (
        <Button
          key={index}
          onClick={() => CortarContenido(index, index + 1)}
          to={`/${busquedad ? `buscar/${busquedad}` : section}/${index + 1}`}
        >
          {index + 1}
        </Button>
      );
      buttons.push(newButton);
    }

    return buttons;
  };

  const onClickCardContainer = (...object) => {
    dispatch(setDataVisualization(...object));
    dispatch(setScroll("view-content"));
  };

  let wordSeccionTransform = (seccion) => seccion.toLowerCase();

  return (
    <Contenedor dataFilter={dataFilter} displaySearch={displaySearch}>
      <ScrollTop id="scrollTop"/>
      <Toaster richColors theme="dark" />
      {dataVisualization.image && (
        <ContentView
          id="view-content"
          className="animate__animated animate__fadeInDown"
        >
          <ContentViewDescription>
            <ContenedorPlacas>
              <Placa section={wordSeccionTransform(dataVisualization.seccion)}>
                {dataVisualization.seccion}
              </Placa>
            </ContenedorPlacas>
            <Title>{dataVisualization.title}</Title>
            <Authors>{dataVisualization.authors}</Authors>
            <Description>{dataVisualization.descripcion}</Description>

            <ContenedorPlacas>
              <NavLinkDeleteStyles to={dataVisualization.link} target="_blank">
                <ButtonLink>
                  {dataVisualization.seccion === "Libros"
                    ? "Descargar"
                    : `Ir a ${dataVisualization.title}`}
                </ButtonLink>
              </NavLinkDeleteStyles>
            </ContenedorPlacas>
          </ContentViewDescription>
          <ContainerFrontPage>
            <Img src={dataVisualization.image} />
          </ContainerFrontPage>
        </ContentView>
      )}
      
      <Sponsors />

      {MessageAfterClickOnSearch.length > 0 && (
        <MessageDataSliceEmpty>
          {MessageAfterClickOnSearch}
        </MessageDataSliceEmpty>
      )}

      <GridBooks
        displaySearch={displaySearch}
      >
        {dataSlice?.map(
          ({ image, descripcion, title, seccion, link, authors }, index) => {
            return (
              <CardContainer
                key={index}
                id={`card${index}`}
                onClick={() =>
                  onClickCardContainer({
                    image,
                    descripcion,
                    title,
                    seccion,
                    link,
                    authors,
                  })
                }
              >
                <Card>
                  <CardImagen>
                    <CardImg src={image} alt={title} />
                  </CardImagen>

                  <FlexColumnInPhone>
                    <CardTitle>{title}</CardTitle>

                    <CardDescription>{descripcion}</CardDescription>
                    <VerMas>Ver más...</VerMas>
                    {dataFilter.length > 0 && (
                      <ContenedorPlacas>
                        <Placa section={wordSeccionTransform(seccion)}>
                          {seccion}
                        </Placa>
                      </ContenedorPlacas>
                    )}
                  </FlexColumnInPhone>
                </Card>
              </CardContainer>
            );
          }
        )}
      </GridBooks>

      <Pagination>{Buttons()}</Pagination>
    </Contenedor>
  );
};
