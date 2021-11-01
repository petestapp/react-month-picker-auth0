import {useState} from "react";
import MonthItem from "../MonthItem/MonthItem";

function MonthList(props){
    //const[name, setName] = useState(null);
    return(
        <div>
            <h1>MonthList</h1>
            <ul>
                {props.months.map(month=>(<MonthItem month={month}/>))}
            </ul>
        </div>
    )
}

export default MonthList;