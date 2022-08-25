import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Sort, Filter, Toolbar, Search } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { studentGrid } from '../data/dummy';
import { Header } from '../components';

const Student = () => {
  let arr = [];
  const { name } = useParams();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search'];
  // const editing = { allowDeleting: true, allowEditing: true };
  const [studentData, setStudentData] = React.useState([]);

  const getStudents = async () => {
    const response = await axios.get('http://localhost:5000/api/admin/students');
    return response.data.data;
  };
  useEffect(() => {
    getStudents()
      .then((data) => {
        setStudentData(data);
      }).catch();
  }, []);

  const getStudentsByInstitute = async () => {
    const response = await axios.get(`http://localhost:5000/api/admin/students/institute/${name}`);
    return response.data.data;
  };
  useEffect(() => {
    getStudentsByInstitute()
      .then((data) => {
        setStudentData(data);
      }).catch();
  }, [name]);

  const selectedStudents = async () => {
    // console.log(arr);
    const response = await axios.post(`http://localhost:5000/api/admin/students/select/${name}`, {
      selected: arr,
    });
    window.location.reload();
    return response.data.data;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Students" />
      <button type="submit" onClick={selectedStudents} className="inline-block px-6 py-2.5 mb-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
      <GridComponent
        dataSource={studentData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        // editSettings={editing}
        allowSorting
        // allowFilterings
        rowSelected={(args) => {
          // arr = [];
          // console.log(args.data);
          arr.push(args.data.id);
          // console.log(arr);
        }}
        rowDeselected={(args) => {
          arr = arr.filter((id) => id !== args.data.id);
          // console.log(arr);
        }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {studentGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

// export const selectsdt = () => (
//   <input type="checkbox" />
// );

export default Student;
