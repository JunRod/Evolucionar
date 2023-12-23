import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "sonner";
import {
  setDataSlice,
  setDataVisualization,
  setScroll,
} from "../../store/masculinidad";
import { useEffect } from "react";
import { Sponsors } from "../components/Sponsors";
import { Authors, Button, ButtonLink, Card, CardContainer, CardDescription, CardImagen, CardImg, CardTitle, ContainerFrontPage, Contenedor, ContenedorPlacas, ContentView, ContentViewDescription, Description, FlexColumnInPhone, GridBooks, Img, MessageDataSliceEmpty, NavLinkDeleteStyles, Pagination, Placa, ScrollTop, VerMas, Title } from "../../styles/ContentPageStyles";

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
