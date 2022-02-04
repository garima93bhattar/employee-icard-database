import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

//This is a functional component
export const CardList = (props) => {
    console.log(props)
    return <div className="card-list">
        {
            props.employees.map(employee => (
                <Card key={employee.id} employee={employee} />)
            )}
    </div>;
};