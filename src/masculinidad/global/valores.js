export const sizes = {
  mobileS: '320px',
  mobileM: '375px', //
  mobileL: '425px',
  tablet: '768px', //
  laptop: '1024px', //
  laptopL: '1440px', //
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const theme = {
  telegram: "#229ED9",
  youtube: "#FF0000",
  libros: "#bac9d8",
  twitter: "#00acee",
  tiktok:
    "linear-gradient(97deg, rgba(1,1,1,1) 0%, rgba(105,201,208,1) 51%, rgba(238,29,82,1) 100%)",
  discord: "#5865F2",

  primario: "#04080b",
  secundario: "#bac9d8",

  fontRegular: "Satoshi Regular, sans-serif",
  styleRegular: "normal",
  weightRegular: "normal",

  fontMediumItalic: "Satoshi Medium Italic, sans-serif",
  styleMediumItalic: "italic",
  weightMediumItalic: 500,

  fontBoldItalic: "Satoshi Bold Italic, sans-serif",
  styleBoldItalic: "italic",
  weightBoldItalic: "bold",

  fontBlackItalic: "Satoshi Black Italic, sans-serif",
  styleBlackItalic: "italic",
  weightBlackItalic: 900,
};