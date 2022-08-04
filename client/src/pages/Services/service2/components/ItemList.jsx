const complaint=[
    {id:"departmentName",
    label:"Department Name",
    type:"text",
    className: "form-items srow"
},

    {
        id:"schemeName",
        label:"Scheme Name",
        type:"text",
        className: "form-items trow"
    },
    {
        id:"complaintName",
        label:"Complaint Type",
        type:"text",
        className: "form-items trow"
    },
    
    
]

const FormItems=[
    {
        id:"fullname",
        label:"Full Name",
        type:"text",
        className: "form-items frow"
    },
    {
        id:"mobile",
        label:"Mobile No.",
        type:"tel",
        className: "form-items frow"
    },
    {
        id:"email",
        label:"Email",
        type:"email",
        className: "form-items srow"
    }
]
export default complaint
export {FormItems};