
import React from "react";
import {useState} from "react";


export interface IProps {
    people: {
        name: string
        age: number
        img: string
        note?: string
    }[]
  }

const List: React.FC<IProps> = ({people}) =>{
    return(
        <div>
            {people.map(person => {
                return(
                    <li>{person.name}</li>
                )
            })}
        </div>
    )
}

export default List;