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

  // const handleSponsorClick = () => {
  //   // dispatch(setSponsor(!sponsor))

  //   redirectToEmail();
  // };

  const redirectToEmail = () => {
    // var emailAddress = 'junrodpro@gmail.com';
    // var subject = 'Quiero patrocinar Masculinidad';
    // var body = 'Quiero patrocinar Masculinidad';
    // var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    // window.open(mailtoLink, "_blank")
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

      <a
        id="tooltip"
        data-tooltip-delay-hide={5000}
        disabled
        style={{
          opacity: "50%",
          cursor: "pointer",
        }}
        // className={`${sponsor ? "on" : "off"}`}
        // onClick={handleSponsorClick}
      >
        Patrocinarnos
      </a>
    </ContainerSectionLeft>
  );
};
