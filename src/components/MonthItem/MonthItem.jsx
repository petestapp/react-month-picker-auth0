import {useState} from "react";

function MonthItem(props){
    //const[name, setName] = useState(null);
    return(
        <div>
            <h1>MonthItem</h1>
            <p>props: {JSON.stringify(props)}</p>
        </div>
    )
}

export default MonthItem;