import React, { useState } from "react";
import Complaint, { FormItems } from "./ItemList";
function Items(){

    
   
function CreateFormItems(form) {
    return (
      <div>
        <div className="form-items">
          <div>
            <label for={form.id}>{form.label}</label>
            <span className="mandatory">*</span>
          </div>
          <input
            className="form-input"
            type={form.type}
            id={form.id}
            autoComplete="off"
            required
          />
        </div>
      </div>
    );
  }
  return <div className="form">{FormItems.map(CreateFormItems)}</div>
}

export default Items;