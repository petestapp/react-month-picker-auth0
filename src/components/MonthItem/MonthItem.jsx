import {useState} from "react";

function MonthItem(props){
    //const[name, setName] = useState(null);
    const showAlert=()=>{
        console.log('in showAlert');
        alert(props.month.name);
    }

    return(
        <div>
            <li onClick={showAlert}>{props.month.name}</li>
        </div>
    )
}

export default MonthItem;