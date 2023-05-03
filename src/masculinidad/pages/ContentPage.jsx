import { useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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



const Contenedor = styled.div`
  background-color: ${(props) => props.theme.primario};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 11vh 10vh 10vh 10vh;
  height: 100%;

  height: ${(props) => {
    if (props.displaySearch) {
      return props.dataFilter.length === 0 ? "100vh" : "100%";
    } else {
      return "100%";
    }
  }};

  @media ${devices.mobileS} {
    padding: 75px 10px 10px 10px;
  }
  
  @media ${devices.tablet} {
    padding: 90px 10px 10px 10px;
  }

  @media ${devices.laptop} {
    padding: 80px 10px 10px 10px;
  }

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
  padding: 10px;
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: row;

  @media ${devices.mobileS} {
  height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media ${devices.tablet} {
  height: 60vh;
  flex-direction: row;
  }

  @media ${devices.laptop} {
  height: 60vh;
    margin-top: 0;
  }

`;

const ContentViewDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-size: 80vh 130vh;
  z-index: 5;
  position: relative;
  width: 40%;
  height: 100%;
  order: 0;
  color: ${(props) => props.theme.secundario};
  font-size: 3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  gap: 5px;

    @media ${devices.mobileS} {
    margin-bottom: 20px;
    width: 100%;
    padding: 0;
  }
  
  @media ${devices.tablet} {
    width: 80%;
    padding: 5vh 0vh 0 0;
  }

  @media ${devices.laptop} {
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
  font-size: 5.5vh;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: normal;
`;

const Description = styled.div`
  font-size: 2.5vh;
  height: 23vh;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${devices.mobileS} {
    width: 100%;
    height: 130px;
    max-height: 160px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  @media ${devices.tablet} {
    width: 100%;
    height: 200px;
  }

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
        background: linear-gradient(0deg, ${props => props.theme.primario} 5%, transparent 60%) no-repeat;
    } 
  
      @media ${devices.tablet} {
        box-shadow: inset 9vh -11vh 14vh 8vh ${(props) => props.theme.primario},
      inset 9vh -11vh 10vh -4vh ${(props) => props.theme.primario};
      }

      @media ${devices.laptop} {
      }

  }
 
`;

const Img = styled.img`
  border-radius: 1vh 1vh 0 0;
  height: 100%;
  width: 100%;

`;

const GridBooks = styled.div`
  position: relative;
  top: -8vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  gap: 3vh;
  z-index: 90;

  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
    padding: ${props => props.displaySearch ? "80px 0 0 0 !important" : "0"};
  }
  
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 !important;
  }

`;

const CardContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  position: relative;

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
  justify-content: center;
  align-items: center;

  :hover::before {
    display: flex !important;
  }

  ::before {
    z-index: 90;
    display: none;
    content: "";
    position: absolute;
    backdrop-filter: blur(4px);
    height: 97%;
    width: 95%;
  }

  :hover::after {
    display: flex !important;
  }

  ::after {
    display: none;
    content: "";
    z-index: 100;
    height: 100%;
    width: 100%;
    background-image: url("/images/view.png");
    background-repeat: no-repeat;
    background-size: 100px 100px;
    background-position: center;
    position: absolute;
  }

  @media ${devices.mobileS} {
    flex-direction: row;
  }
  
  @media ${devices.tablet} {
    flex-direction: column;
  }

`;

const CardImagen = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardImg = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;

`;

const CardTitle = styled.div`
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  text-align: center;
  font-size: 3vh;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 0.1vh;
`;

const CardDescription = styled.div`
  font-size: 2.3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  height: 17vh;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContenedorPlacas = styled.div`
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5vh;
  align-items: center;
`;

const FlexColumnInPhone = styled.div`
  
  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${devices.tablet} {
    gap: 5px;
    padding-bottom: 20px;
  }
  
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
    const variable = scroll === "view-content" && "#view-content";

    if (variable === false || variable === "") return;

    document.querySelector(variable).scrollIntoView({ behavior: "smooth" });

    dispatch(setScroll(""));
  }, [scroll, dataVisualization]);

  let corte_one = 0;
  let corte_two = 0;

  const CortarContenido = (index, index_two) => {
    var variant =
      dataFilter.length > 0 ? dataFilter : data[sectionCurrent || section];

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

            <Description>{dataVisualization.descripcion}</Description>
          </ContentViewDescription>
          <ContainerFrontPage>
            <Img src={dataVisualization.image} />
          </ContainerFrontPage>
        </ContentView>
      )}

      {MessageAfterClickOnSearch.length > 0 && (
        <MessageDataSliceEmpty>
          {MessageAfterClickOnSearch}
        </MessageDataSliceEmpty>
      )}

      <GridBooks displaySearch={displaySearch} style={{ marginTop: !dataVisualization.image && "8vh" }}>
        {dataSlice?.map(({ image, descripcion, title, seccion }, index) => {
          return (
            <CardContainer
              key={index}
              id={`card${index}`}
              onClick={() =>
                onClickCardContainer({ image, descripcion, title, seccion })
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
        })}
      </GridBooks>

      <Pagination>{Buttons()}</Pagination>
    </Contenedor>
  );
};
