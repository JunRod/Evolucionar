import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  setDataFilter,
  setDataSlice,
  setDataVisualization,
  setMessageAfterClickOnSearch,
  setScroll,
  setSectionCurrent,
  setdisplaySearch,
} from "../../store/masculinidad";
import styled from "styled-components";
import { devices } from "../global/valores";

const sections = [
  "libros",
  "youtube",
  "twitter",
  "tiktok",
  "telegram",
  "aplicaciones",
];

const ContainerSearch = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  @media ${devices.mobileS || devices.mobileM || devices.mobileL} {
    display: none !important;
  }

  @media ${devices.laptop} {
    display: ${(props) => props.displaySearch ? "flex" : "none"} !important;
  }
`;

const ButtonReturn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  z-index: 90;
  padding: 3px 4px;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  font-size: 17px;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  border-radius: 1vh;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.primario};
    background-color: ${(props) => props.theme.secundario};
  }
`;

const ContainerInput = styled.div`
  z-index: 300;
  border-radius: 1vh;
  gap: 1vh;
  width: 80vh;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  order: 2;
  border: 0;
  border-radius: 0;
  padding: 0;
  width: 100%;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  background-color: transparent;
  font-size: 2.8vh;

  &:focus {
    border: 0;
    outline: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.secundario};
    font-size: 2.8vh;
  }
`;

const Icon = styled.svg`
  cursor: pointer;
  padding: 0.8vh 1.5vh;
  order: 0;
  height: 5vh;
  color: ${(props) => props.theme.secundario};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }
`;

const LogoNavbar = styled(Link)`
  text-decoration: none;
  position: relative;
  height: 100%;
  width: 20vh;
`;

const Title = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleBoldItalic};
  font-size: 3vh;
  letter-spacing: 0.2vh;
  color: ${(props) => props.theme.secundario};

  @media ${devices.mobileS} {
    font-size: 2vh;
  }
  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;

export const GeneratorsNav = () => {

  //Buscador | SectionsRight
  const inputBuscar = useRef();

  const Buscador = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, displaySearch } = useSelector((state) => state.masculinidad);

    const onSearch = async () => {
      dispatch(setDataVisualization({}));

      const value = inputBuscar.current.value;

      if (value.length === 0) {
        toast.error("Debe rellenar el campo.");
        return;
      }

      let filtrado = [];

      for (const key in data) {
        const filter = data[key].filter(
          ({ title, descripcion }) =>
            title.toLowerCase().includes(value) ||
            descripcion.toLowerCase().includes(value)
        );

        filtrado.push(...filter);
      }

      dispatch(setDataFilter(filtrado));
      dispatch(setDataSlice(filtrado.slice(0, 12)));

      navigate(`/buscar${filtrado.length > 0 ? `/${value}/1` : ""}`);

      if (filtrado.length === 0) {
        dispatch(setMessageAfterClickOnSearch(`Sin resultados de ${value}`));
      } else {
        dispatch(setMessageAfterClickOnSearch(""));
      }
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) onSearch();
    };

    const onVolver = () => {
      dispatch(setDataFilter([]));
      dispatch(setdisplaySearch(false));
      dispatch(setMessageAfterClickOnSearch(""));
    };

    return (
      <ContainerSearch
        displaySearch={displaySearch}
      >
        <ButtonReturn to={"/"} onClick={onVolver}>
          Volver
        </ButtonReturn>
        <ContainerInput>
          <Input
            type="text"
            placeholder="Buscar"
            onKeyDown={handleKeyDown}
            ref={inputBuscar}
          />
          <Icon
            onClick={onSearch}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </Icon>
        </ContainerInput>
      </ContainerSearch>
    );
  };

  const Logo = () => {
    const dispatch = useDispatch();

    const onClickLogo = () => {
      dispatch(setMessageAfterClickOnSearch(""));
      dispatch(setScroll("principal"));
      dispatch(setDataFilter([]));
      dispatch(setDataSlice([]));
      dispatch(setdisplaySearch(false));
      dispatch(setDataVisualization({}));
    };

    return (
      <LogoNavbar to={"/"} onClick={onClickLogo}>
        <Title>MASCULINIDAD</Title>
      </LogoNavbar>
    );
  };

  const SectionsLeft = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.masculinidad);

    const onClickSection = (section) => {
      dispatch(setDataVisualization({}));
      dispatch(setSectionCurrent(section));
      dispatch(setDataSlice(data[section].slice(0, 12)));
    };

    return sections.map((section) => (
      <NavLink
        onClick={() => onClickSection(section)}
        key={section}
        to={`/${section}/1`}
        className={({ isActive }) => `${isActive ? "on" : "off"}`}
      >
        {section}
      </NavLink>
    ));
  };

  const SectionsRight = () => {
    const dispatch = useDispatch();

    const onInputFocus = () => {
      setTimeout(() => {
        inputBuscar.current.focus();
      }, 1);
    };

    const onClickBuscar = () => {
      dispatch(setDataSlice([]));
      dispatch(setDataFilter([]));
      dispatch(setDataVisualization({}));
      dispatch(setdisplaySearch(true));
      onInputFocus();
    };

    const onAportar = () => {
      dispatch(setScroll("aportar"));
    };

    return (
      <>
        <NavLink
          to={"/buscar"}
          onClick={onClickBuscar}
          className={({ isActive }) => `${isActive ? "on" : "off"}`}
        >
          Buscar
        </NavLink>

        <Link to={"/"} onClick={onAportar}>
          Aportar
        </Link>
      </>
    );
  };

  return [SectionsLeft, SectionsRight, Logo, Buscador];
};
