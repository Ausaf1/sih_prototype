import React, { useEffect } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems, selectedGrid } from '../data/dummy';
import { Header } from '../components';

const Selected = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const selectionsettings = { persistSelection: true };
  const [selectedStudentsData, setSelectedStudentsData] = React.useState([]);
  let arr = [];

  const getStudents = async () => {
    const response = await axios.get('http://localhost:5000/api/admin/students/selected');
    console.log(response.data.data);
    return response.data.data;
  };
  // const Selectall = ;
  useEffect(() => {
    getStudents()
      .then((data) => {
        setSelectedStudentsData(data);
      }).catch();
  }, []);

  const updatePayment = async () => {
    const response = await axios.post('/api/admin/students/payment', {
      payementDone: arr,
    });
    window.location.reload();
    return response.data.data;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="selected" />
      <button type="submit" onClick={updatePayment} className="inline-block px-6 py-2.5 mb-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Done</button>
      <GridComponent
        id="gridcomp"
        dataSource={selectedStudentsData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        selectionSettings={selectionsettings}
        editSettings={editing}
        rowSelected={(args) => {
          // arr = [];
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
          {selectedGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Selected;
