import React from "react";
import "./styles.css"

export const InputSearch = ({onChange, value}) => {

    return(

        <input 
        className="text-input"
        onChange={onChange}
        value={value}
        type="search" placeholder="Faca sua pesquisa" 
        />
    )

}