import React from "react";
class Person extends React.Component {
    render() {
        // console.log(this.props)
        return <p>Hello {this.props.name}</p>
    }
}

export default Person;