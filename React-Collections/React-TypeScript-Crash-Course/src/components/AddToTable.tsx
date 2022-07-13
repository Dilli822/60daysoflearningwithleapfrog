import React, { useState, useEffect } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    // setPeople: : React.Dispatch<React.SetStateAction<{
    //     name: string;
    //     age: number;
    //     img: string;
    //     note?: string | undefined;
    // }[]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

// using IProps with React functionalComponent
// with destructing the state people and setPeople
const AddToTable: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        // these all name,age,img, note will be overided by e.target.value which is coming from e.target.name
        name: "",
        age: "",
        img: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({

            // whatever the input just copy the object
            ...input,
            /// e is event // can be done as name: e.target.value or age: e.target.value
            [e.target.name]: e.target.value
        })
    }

    // not returning anything with void
    const handleClick = (): void => {
        if(
            !input.name || !input.age || !input.img
        ) {// returning nothing as defined it is void 
            return          
        }

        setPeople([...people, {
            name: input.name,
            // getting error ---Type 'string' is not assignable to type 'number'.BEAUTY OF TS
            // age: input.age is buggy as it will be always string and need to be parsed
            age: parseInt(input.age),
            // img: input.img,
            img: input.img,
            note: input.note
        }])
        

    }

    return(
        <div style={{  width: "100%" }}>
            <h5> Add to Table Row </h5>
            <h4> Form </h4>

            <form action="">

                <input 
                type="text" 
                placeholder="Enter Name"
                style={{ width: "90%"}}
                // accessing const input methods
                value={input.name}
                // onChange={(e)=>{}}
                onChange={handleChange}
                // this input is responsible for name
                name="name"
                />

                <input 
                type="text" 
                // type = "number"
                placeholder="Enter Age"
                style={{ width: "90%"}}
                value={input.age}
                onChange={handleChange}
                name="age"
                />
                
                <input 
                type="text" 
                placeholder="Enter Image URL with out adding htts: add directly for eg: //unsplash.iy/45 "
                style={{ width: "90%"}}
                value={input.img}
                onChange={handleChange}
                name="img"
                />
                
                <textarea 
                placeholder="Add Bio"
                style={{ width: "95%"}}
                value={input.note}
                // error -ts understand this is also for HTMLInput Element as add union in e type above
                // onChanage={handleChange} 
                onChange = {handleChange}
                name="note"
                />
                
                {/* Button for adding list to table */}
                <button
                  onClick={handleClick}
                >
                    Add to Table List
                </button>
                
            </form>
        </div>

    )
}

export default AddToTable;