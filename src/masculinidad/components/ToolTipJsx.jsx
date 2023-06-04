import Twitter from "/images/twitter.svg";
import { ContainerTwitter, Toltip } from "../../styles/TooltipStyles";

export const ToolTipJsx = ({ id, item }) => {
  return (
    <Toltip
      item={item}
      anchorSelect={`#${id}`}
      clickable
      className="example-diff-arrow"
      classNameArrow="example-arrow"
    >
      <p>Muy pronto</p>
      <ContainerTwitter to={"https://twitter.com/JuNRod_"} target="_blank">
        <img src={Twitter} alt="Twitter" />
      </ContainerTwitter>
    </Toltip>
  );
};
