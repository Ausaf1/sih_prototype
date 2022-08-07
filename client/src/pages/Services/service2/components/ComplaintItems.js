import React, { useState } from "react";
import Complaint, { FormItems } from "./ItemList";

function ComplaintItems(){
    function CreateComplaintItem(complaint) {
        return (
          <div className="form-items"> 
            <div>              
              <label className="complaint-label" for={complaint.id}>
                {complaint.label}
              </label>
              <span className="mandatory">*</span>
            </div>
            <input
              className="form-input"
              id={complaint.id}
              type={complaint.type}
              autoComplete="off"
              required
            />
          </div>
        );
      }

  return <div className="form">{Complaint.map(CreateComplaintItem)}</div>
}

export default ComplaintItems;