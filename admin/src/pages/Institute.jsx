import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';

import axios from 'axios';
// import { instituteGrid } from '../data/dummy';
import { Header } from '../components';
import { instituteGrid } from '../data/dummy';

const Institute = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: false, allowEditing: false };
  const [instituteData, setInstituteData] = React.useState([]);

  const getEmployees = async () => {
    const response = await axios.get('http://localhost:5000/api/admin/institute');
    // console.log(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getEmployees()
      .then((data) => {
        setInstituteData(data);
      }).catch();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Institutes" />
      <Link to="/institute/create" className="inline-block px-6 py-2.5 mb-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">CREATE</Link>
      <GridComponent
        dataSource={instituteData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {instituteGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          {/* <Link to="/institute/update" className="inline-block px-6 py-2.5 mb-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">EDIT</Link> */}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default Institute;
