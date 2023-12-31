<div className='alert alert-secondary'>
      <select name="currency" id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>       
    </div>