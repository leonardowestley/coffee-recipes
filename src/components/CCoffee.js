import React from "react";

class CCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            another: 'plop',
        }
    }
    handleClick() {
        this.setState({ count: this.state.count + 1})
    }
    render() {
        // const { count } = would remove this.state.count line21 would be { count }
        // const { firstName } = would remove this.props.firstName line20 would be { firstName }
        return (
        <>
         <h1>Coffee List (CC)</h1>
         <p>Hello {this.props.firstName}</p>
         <p>You clicked the button {this.state.count} times.</p>
         <button onClick={() => this.handleClick()}>Click Me</button>
        </>
        )
    }
}

export default CCoffee;