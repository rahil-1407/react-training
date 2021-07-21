import InputText from "./InputText";
import InputFile from "./InputFile";
import GetDate from "./GetDate";
import SelectCars from "./SelectCars";
import RadioButton from "./RadioButton";
import VolumeRange from "./VolumeRange";

function MainComponents() {
  return (
    <div>
      <br />
      <InputText /> <br /> <br />
      <label>Upload File: </label>
      <InputFile /> <br /> <br />
      <label>Enter your DOB: </label>
      <GetDate /> <br /> <br />
      <label>Choose Cars: </label>
      <SelectCars /> <br /> <br />
      <label>Select your Domain: </label>
      <RadioButton /> <br /> <br />
      <label>Volume (between 0 and 50):</label>
      <VolumeRange /> <br /> <br />
    </div>
  );
}

export default MainComponents;
