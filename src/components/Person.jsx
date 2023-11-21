import React from 'react'

const Person = (props) => {
    const name = props.name;
    const surname = props.surname;
    const age = props.age;
    return (
        <>
            <span>{`${name} ${surname}`}</span>
            <span>age of {age}, </span>
        </>
    )
}

export default Person