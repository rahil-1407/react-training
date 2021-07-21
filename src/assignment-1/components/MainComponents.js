import React from "react";
import Button from "./Button";
import InputText from "./InputText";
import Text from "./Text";

class MainComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            textMessage: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleClick(event) {
        this.setState((prevState) => {
            return {
                textMessage : prevState.value,
                value : ""
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1> <br />
                <InputText
                    placeholder="Type in the given box!!"
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
                <br />
                <Button label="Click Me" handleClick={this.handleClick} /> <br />
                <Text message={this.state.textMessage} /> <br />
            </div>
        );
    }
}

export default MainComponents;
