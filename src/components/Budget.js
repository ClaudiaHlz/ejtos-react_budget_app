import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";

export default function Budget(){
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    function handleBudgetChange(e){
        setNewBudget(e.target.value);
    }

    return(
        <div className="alert alert-secondary"> {/** bootstrap for adding design */}
            <span>Budget: ${budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget}
                onChange={handleBudgetChange}
            />

        </div>
    )
}
