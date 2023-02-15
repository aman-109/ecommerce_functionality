import React from "react";

const fieldset = {
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px",
  border:"1px solid",
  paddingLeft:"10px",
  paddingRight:"10px"
};

const legend = {
  fontSize: "20px",
  textAlign: "initial"
};

const label = {
  display: "none"
};

const radioField = {
  // boxSizing: "border-box",
  fontSize: "14px",
  border:"1px solid"
};

const ShippingMethod = () => (
  <fieldset style={fieldset}>
    <legend style={legend}>Shipping Method</legend>
    <div>
      <label
        style={{
          display: "block",
          cursor: "pointer",
          width: "100%"
          // marginBottom: "20px"
        }}
      >
        <input style={radioField} type="radio" name="email" value="stuff" />
        <span style={{ marginLeft: "20px" }}>
          <strong>Standard</strong>
        </span>
        <span style={{ float: "right" }}>$0.00</span>
        <div style={{ marginLeft: "20px" }}>4-10 business days</div>
      </label>
      <label style={{ display: "block", cursor: "pointer", width: "100%" }}>
        <input style={radioField} type="radio" name="email" value="stuff" />
        <span style={{ marginLeft: "20px" }}>
          Express Shipping (3-6 business days)
        </span>
        <span style={{ float: "right" }}>$19.95</span>
      </label>
    </div>
  </fieldset>
);

export default ShippingMethod;
