import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataSlice,
  setDataVisualization,
  setSectionCurrent,
  setSponsor,
} from "../../store/masculinidad";
import { ContainerSectionLeft } from "../../styles/SectionLeftStyles";

const sections = [
  "libros",
  "youtube",
  "telegram",
  "aplicaciones",
];

export const SectionsLeft = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.masculinidad);

  const onClickSection = (section) => {
    dispatch(setDataVisualization({}));
    dispatch(setSectionCurrent(section));
    dispatch(setDataSlice(data[section].slice(0, 12)));
  };

  return (
    <ContainerSectionLeft>
      {sections.map((section) => {
        if (section !== "patrocinarnos") {
          return (
            <NavLink
              onClick={() => onClickSection(section)}
              key={section}
              to={`/${section}/1`}
              className={({ isActive }) => `${isActive ? "on" : "off"}`}
            >
              {section}
            </NavLink>
          );
        }
      })}
    </ContainerSectionLeft>
  );
};
