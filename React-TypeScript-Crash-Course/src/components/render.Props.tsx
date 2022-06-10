import React, { useState } from 'react';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}

function RenderProps() {

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

  return (
    <div className="App">
      <table style={{ width: "100%", display: "block", margin: "0 auto", maxWidth: "800px", borderCollapse: "collapse", overflow: "auto", border: "1px solid #000"}}>
      <thead>
          <tr style={{border: "1px solid #000"}}>
            <th style={{width: "200px",border: "1px solid #000"}}>Name</th>
            <th style={{width: "200px",border: "1px solid #000"}}>age</th>
            <th style={{width: "200px",border: "1px solid #000"}}>bio</th>
            <th style={{width: "200px",border: "1px solid #000"}}>pic</th>
          </tr>
      </thead>
      {
        people.map(person => {
            // returning jsx element
          return(
            <tbody>
              <tr style={{border: "1px solid #000"}}>
                <td style={{border: "1px solid #000"}}> {person.name} </td>
                <td style={{border: "1px solid #000"}}> {person.age} </td>
                <td style={{border: "1px solid #000"}}> {person.note} </td>
                <td style={{border: "1px solid #000"}}> <img style={{ maxWidth: "100%"}}src = {person.img} /> </td>
              </tr>
            </tbody>
            
          )
        })
      }
      </table>
    </div>
  );
}

export default RenderProps;
