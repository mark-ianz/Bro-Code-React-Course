import { useState } from "react";

export default function Form () {
  const [name, setName] = useState ("Empty");

  function handleNameInput (e) {
    e.target.value ? setName (e.target.value) : setName ("Empty");

    console.log(e.key);
  }

  const [paymentMethod, setPaymentMethod] = useState ("Cash on Delivery")
  const [shippingOption, setshippingOption] = useState ("Delivery")

  function handlePaymentChange (e) {
    setPaymentMethod (e.target.value)
  }

  function handleShippingOptionChange (e) {
    setshippingOption (e.target.value)
  }

  return <>
    <p>
      Name: {name}
    </p>
    <div>
      <input type="text" name="name" id="name" onChange={(e)=> handleNameInput (e)} />
    </div>
    <br />
    <select value={paymentMethod} name="payment-method" id="payment-method" onChange={handlePaymentChange}>
      <option value="">Select payment method</option>
      <option value="Cash on Delivery">Cash on Delivery</option>
      <option value="GCash">GCash</option>
      <option value="PayMaya">PayMaya</option>
      <option value="Paypal">Paypal</option>
      <option value="Visa">Visa</option>
    </select>
    <p>
      Your payment method is: {paymentMethod}
    </p>
    <br />
    <label htmlFor="delivery">
      <input type="radio" name="shippingOption" value="Delivery" 
        checked={shippingOption === "Delivery"} 
        onChange={handleShippingOptionChange}/>
        Delivery
    </label>
    <br />
    <label htmlFor="pickup">
      <input type="radio" name="shippingOption" value="Pick up" 
        checked={shippingOption === "Pick up"} 
        onChange={handleShippingOptionChange}/>
        Pickup
    </label>
    
    <p>
      Shipping Option: {shippingOption}
    </p>
  </>
}