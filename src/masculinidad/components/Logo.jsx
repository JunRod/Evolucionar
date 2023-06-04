import { useDispatch } from "react-redux";
import { setDataFilter, setDataSlice, setDataVisualization, setMessageAfterClickOnSearch, setScroll, setdisplaySearch } from "../../store/masculinidad";
import { LogoNavbar, Title } from "../../styles/LogoStyles";

export const Logo = () => {
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

export default Logo;
