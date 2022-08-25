import React from "react";
import DataGrid from "react-data-grid";
import axios from "axios";
import "./SelectedList.css";

const columns = [
  { key: "studentName", name: "Name" },
  { key: "instituteName", name: "Institute" },
  { key: "studentCourse", name: "Course" },
  { key: "courseId", name: "Course ID" },
];

// const rows = [
//   { id: 0, title: "Example" },
//   { id: 1, title: "Demo" },
// ];

function SelectedList() {
  const [rows, setRows] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //    filter searched rows
  const filteredRows = rows.filter((row) => {
    return Object.keys(row).some((key) => {
      return String(row[key]).toLowerCase().includes(search.toLowerCase());
    });
  });

  const getStudents = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/admin/students/selected"
    );
    // console.log(response.data.data);
    return response.data.data;
  };

  React.useEffect(() => {
    getStudents()
      .then((data) => {
        setRows(data);
      })
      .catch();
  }, []);

  return (
    <div className="Container1">
      <h1 className="heading">List of Empanelled Institutes</h1>
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <DataGrid columns={columns} rows={filteredRows} />
    </div>
  );
}

export default SelectedList;
