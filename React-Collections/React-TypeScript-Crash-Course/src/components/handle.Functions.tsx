
  import React, {useState} from "react";
  import { IState as IProps } from "../App";

// export interface Istate to pass it down to props for other components too
export interface IState {
    people: {
        name: string
        age: number
        img: string
        note?: string
    }[]
  }
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Saphal Khawas",
      age: 21,
      img: "https://unsplash.it/45",
      note: "Works for municipality",
    },
    {
      name: "Dilli Hang Rai",
      age: 23,
      img: "https://unsplash.it/48",
      note: "student | Front End Developer",
    },
    {
      name: "Monkey.D.Luffy",
      age: 23,
      img: "",
      note: "MOnkey D. Luffy is a main character of One Piece anime who has dream of becoming king of pirates."
    }
  ])

  // ***** HANDLING FUNCTIONS 
  // const renderList = () => { --> without any return type it will be void 
  // Here we explicitly defined JSX.Element with array type will be returned by renderList function
  const renderList = (): JSX.Element[] => {
    return people.map((person) =>{
      // return( ) what type? --> it is JSX Element type with Array
      return(
        <div>
          <ul>
           <li>{person.name}</li>
           <li>{person.age} </li>
           <li>{person.note}  </li>
           <li>{person.img}</li>
          </ul>
        </div>
      )
    })
  }

export const extra = () => {
      return(
          <div>

          </div>
      )
  }

        {/* <div>
        <h3> This is returning renderList Function.</h3>
        <ul> {renderList()} </ul>
      </div>

      <div>
        <h4> This is renderListProps! </h4>
        <RenderProps/>
      </div> */}
      