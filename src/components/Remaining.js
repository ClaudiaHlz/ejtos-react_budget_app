import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining(){
    const {expenses, budget} = useContext(AppContext);

    //.reduce is actually an array operation ... "accumulate" a single value out of many
    const totalExpenses = expenses.reduce((total, item) => {
        return(total = total+item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}