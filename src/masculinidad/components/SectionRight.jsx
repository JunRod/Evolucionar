import { useDispatch, useSelector } from "react-redux";
import {
  setDataFilter,
  setDataSlice,
  setDataVisualization,
  setScroll,
  setSponsor,
  setdisplaySearch,
} from "../../store/masculinidad";
import { Link, NavLink } from "react-router-dom";
import { ToolTipJsx } from "./ToolTipJsx";
import { ContainerSectionLeft } from "../../styles/SectionLeftStyles";

export const SectionsRight = () => {
  const dispatch = useDispatch();
  // const { sponsor } = useSelector((state) => state.masculinidad);

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
    <ContainerSectionLeft>
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

    </ContainerSectionLeft>
  );
};
