import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyType = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: document.getElementById('inputGroupSelect03').value,
        });
    }
    
    
    return (
        <div className='alert alert-secondary'>
        <select name="currency" id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>       
    </div>
    );
};
export default CurrencyType;