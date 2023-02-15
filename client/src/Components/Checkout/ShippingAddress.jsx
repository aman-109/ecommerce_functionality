import React from "react";

const ShippingAddress = ({handleChange,state}) =>{
    
    return(
  <fieldset style={fieldset}>
    <legend style={legend}>Shipping Address</legend>
    <div>
      <label for="shipping-address-first-and-last-name" />
      <input
      value={state.name}
      
        onChange={handleChange}
        id="shipping-address-first-and-last-name"
        style={inputField}
        type="text"
        name="name"
        placeholder="First and Last Name"
      />
      <label for="shipping-address-street-address" />
      <input
      value={state.add}
      
        onChange={handleChange}
        id="shipping-address-street-address"
        style={inputField}
        type="text"
        name="add"
        placeholder="Street Address"
      />
      <div>
        <label for="shipping-address-extended-address" />
        <input
        value={state.plot}
        
        onChange={handleChange}
          id="shipping-address-extended-address"
          style={halfInputField}
          type="text"
          name="plot"
          placeholder="Apt/Suite"
        />
        <label for="shipping-address-company" />
        <input
        value={state.company}
        
        onChange={handleChange}
          id="shipping-address-company"
          style={halfInputField}
          type="text"
          name="company"
          placeholder="Company"
        />
      </div>
      <div>
        <label for="shipping-address-city-locality" />
        <input
        value={state.city}
        
        onChange={handleChange}
          id="shipping-address-city-locality"
          style={cityInputField}
          type="text"
          name="city"
          placeholder="City"
        />
        <label for="shipping-address-state-region" />
        <input
        value={state.states}
        
        onChange={handleChange}
          id="shipping-address-state-region"
          style={stateInputField}
          type="text"
          name="states"
          placeholder="State"
        />
        <label for="shipping-address-postal-code" />
        <input
        value={state.postal}
        
        onChange={handleChange}
          id="shipping-address-postal-code"
          style={postalInputField}
          type="text"
          name="postal"
          placeholder="Zip Code"
        />
      </div>
    </div>
  </fieldset>
);
    }

const fieldset = {
  /* checkoutSteps */
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px",
  border:"1px solid",
  paddingLeft:"10px",
  paddingRight:"10px",

};

const legend = {
  /* checkoutStepsTitle */
  fontSize: "20px",
  textAlign: "initial"
};

const label = {
  display: "none"
};

const inputField = {
  /* checkoutStepsField */
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "100%",
  marginBottom: "20px",
  border:"1px solid"
};

const halfInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  marginBottom: "20px",
  padding: "12px 20px",
  width: "50%",
  border:"1px solid"
};

const cityInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "41.6%",
  border:"1px solid"
};

const stateInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "25%",
  border:"1px solid"
};

const postalInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "33.3%",
  border:"1px solid"
};

export default ShippingAddress;
