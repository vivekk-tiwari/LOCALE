import React from "react";

function Search(props){
    return(
        <div>
            <form>
                <input id={props.id} placeholder="Search 🔍"></input>
            </form>
        </div>
    )  
}

export default Search