import { theme } from "./valores";

export const styles = {
    bmBurgerButton: {
      position: "relative",
      width: '25px',
      height: '25px',
    },
    bmBurgerBars: {
      background: `${theme.secundario}`
    },
    bmBurgerBarsHover: {
      background: 'red'
    },
    bmCrossButton: {
      height: '30px',
      width: '30px',
    },
    bmCross: {
      background: `${theme.secundario}`
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100vh',
      top: "0",
    },
    bmMenu: {
      backdropFilter: "blur(14px)",
      fontSize: '18px',
      padding: "40px 0 0 0",
      overflow: "hidden",
    },
    bmItemList: {
      color: `${theme.secundario}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    bmItem: {
      display: 'block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }