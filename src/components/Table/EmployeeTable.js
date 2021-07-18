import React from 'react';
//import './card.css'

const EmployeeTable = (props) => {
    return (
        <div >
            <div><img  alt={props.last} src={props.picture}/></div>
            <div>{props.title} {props.first} {props.last}</div>
            <div>{props.age}</div>
            <div><a href={`mailto:${props.email}`}>{props.email}</a></div>
            <div>{props.phone}</div>
            <div>{props.city}, {props.state} {props.postcode}</div>
        </div>
    )
}

export default EmployeeTable;