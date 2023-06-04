import { createSlice } from "@reduxjs/toolkit";
import { dataBackend } from "../../masculinidad/data/data";

const initialState = {
  data: dataBackend,
  dataFilter: [],
  dataSlice: [],
  dataVisualization: {},
  scroll: "",
  displaySearch: false,
  onButtonsContruibuitors: true,
  MessageAfterClickOnSearch: "",
  sectionCurrent: "",
  isHoverLogo: false,
  isHoverCarousel: false,
  sponsor: true
};

export const masculinidadSlice = createSlice({
  name: "masculinidad",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setDataFilter: (state, { payload }) => {
      state.dataFilter = payload;
    },
    setDataSlice: (state, { payload }) => {
      state.dataSlice = payload;
    },
    setDataVisualization: (state, { payload }) => {
      state.dataVisualization = payload;
    },
    setScroll: (state, { payload }) => {
      state.scroll = payload;
    },
    setdisplaySearch: (state, { payload }) => {
      state.displaySearch = payload;
    },
    setOnButtonsContruibuitors: (state, { payload }) => {
      state.onButtonsContruibuitors = payload;
    },
    setMessageAfterClickOnSearch: (state, { payload }) => {
      state.MessageAfterClickOnSearch = payload;
    },
    setSectionCurrent: (state, { payload }) => {
      state.sectionCurrent = payload;
    },
    setIsHoverLogo: (state, { payload }) => {
      state.isHoverLogo = payload;
    },
    setIsHoverCarousel: (state, { payload }) => {
      state.isHoverCarousel = payload;
    },
    setSponsor: (state, { payload }) => {
      state.sponsor = payload;
    },
  },
});

export const {
  setDataFilter,
  setButtonsGenerates,
  cleanButtonsGenerates,
  setData,
  setDataSlice,
  setDataVisualization,
  setScroll,
  setdisplaySearch,
  setFilesContribuitors,
  setOnButtonsContruibuitors,
  setMessageAfterClickOnSearch,
  setSectionCurrent,
  setIsHoverLogo,
  setIsHoverCarousel,
  setSponsor
} = masculinidadSlice.actions;
