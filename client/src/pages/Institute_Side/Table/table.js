/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import DataGrid from "react-data-grid";
import axios from "axios";
import "./Table.css";
import { useParams } from "react-router-dom";

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

function Table() {
  const { id } = useParams();
  // console.log(name);
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

  const getStudentsByInstitute = async () => {
    const response = await axios.get(
      `/api/institute/getStudents/${id}`
    );
    console.log(response.data.data);
    return response.data.data;
  };
  React.useEffect(() => {
    getStudentsByInstitute()
      .then((data) => {
        setRows(data);
      })
      .catch();
  }, [id]);

  return (
    <div className="Container1">
      <h1 className="heading">Students List</h1>
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <DataGrid columns={columns} rows={filteredRows} />
    </div>
  );
}

export default Table;
