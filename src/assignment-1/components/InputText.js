function InputText(props) {
    return (
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
        />
    );
  }
  
  export default InputText;
  