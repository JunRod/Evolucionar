import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataFilter, setDataSlice, setDataVisualization, setMessageAfterClickOnSearch, setdisplaySearch } from "../../store/masculinidad";
import { ButtonReturn, ContainerInput, ContainerSearch, Icon, Input } from "../../styles/BuscadorStyles";
import { useRef } from "react";

export const Buscador = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, displaySearch } = useSelector((state) => state.masculinidad);
  const inputBuscar = useRef()

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