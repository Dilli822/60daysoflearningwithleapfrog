
import React from "react";
import {useState} from "react";
import { IState as IProps } from "../App";

// this Iprops is imported from App below it is commented out all
// export interface IProps {
//     people: {
//         name: string
//         age: number
//         img: string
//         note?: string
//     }[]
//   }

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