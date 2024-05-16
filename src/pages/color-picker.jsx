import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import PropTypes from "prop-types";
import { Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => (
  <ColorPickerComponent
    id={id}
    mode={mode}
    modeSwitcher={false}
    inline
    showButtons={false}
    change={change}
  />
);

CustomColorPicker.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default function ColorPicker() {
  return (
    <div className="bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap justify-center items-center gap-20">
          <div>
            <p className="mt-2 mb-4 font-semibold text-2xl">Inline Pallete</p>
            <CustomColorPicker id="inline-palette" mode="Palette" />
          </div>
          <div>
            <p className="mt-2 mb-4 font-semibold text-2xl">Inline Picker</p>
            <CustomColorPicker id="inline-picker" mode="Picker" />
          </div>
        </div>
      </div>
    </div>
  );
}
