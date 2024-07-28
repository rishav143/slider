import Continuous from "./Continuous";
import Discrete from "./Discrete";
import Range from "./Range";
import PropTypes from "prop-types";

function Slider({ type, subtype, steps, size, handleClick }) {
  if (type === "Continuous" && subtype === "Single") {
    return <Continuous subtype={subtype} size={size} handleClick={handleClick} />;
  } else if (type === "Discrete" && subtype === "Single") {
    return <Discrete subtype={subtype} steps={steps} size={size}  handleClick={handleClick} />;
  } else {
    return <Range type={type} steps={steps} size={size}  handleClick={handleClick} />;
  }
}

Slider.propTypes = {
  type: PropTypes.oneOf(["Continuous", "Discrete"]),
  subtype: PropTypes.oneOf(["Single", "Range"]),
  steps: PropTypes.oneOf([1, 5, 10]),
  size: PropTypes.oneOf(["Size_24", "Size_32"]),
  handleClick: PropTypes.func,
};

export default Slider;