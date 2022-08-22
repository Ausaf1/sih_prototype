/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentData() {
  const { id } = useParams();
  //   const [studentData, setStudentData] = React.useState([]);
  const [studentName, setstudentName] = React.useState('');
  const [instituteName, setinstituteName] = React.useState('');
  const [studentEmail, setstudentEmail] = React.useState('');
  const [studentPhone, setstudentPhone] = React.useState('');
  const [studentCourse, setstudentCourse] = React.useState('');

  const getStudents = async () => {
    try {
      const res = await axios.get(`/api/admin/student/${id}`);
      //   setStudentData(res.data.data);
      setstudentName(res.data.data.studentName);
      setinstituteName(res.data.data.instituteName);
      setstudentEmail(res.data.data.email);
      setstudentPhone(res.data.data.phoneNumber);
      setstudentCourse(res.data.data.studentCourse);
    } catch (err) {
    //   toast.error('Error in fetching Institute');
    }
  };
  useEffect(() => {
    getStudents();
  }, [id]);
  return (
    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    //     <Header category="Page" title="Student Data" />
    //     <div className="flex flex-col items-center justify-center">
    //         <div className="text-center text-2xl text-gray-800">
    //             <span className="font-bold">Student Data</span>
    //         </div>
    //     </div>
    <div className="max-w-10xl lg:h-screen flex-wrap mx-auto lg:my-0 grid place-items-center">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left mt-5">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{studentName}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            {instituteName}
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            EMAIL: {studentEmail}
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            CONTACT: {studentPhone}
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            COURSE:   {studentCourse}
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            CLASS 10:  99%
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            CLASS 12:  100%
          </p>
          {/* <div className="pt-12 pb-8">
          </div> */}
          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            {/* <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" data-tippy-content="Download Adhaar Card">Adhaar Card</button>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" data-tippy-content="Download 12 Marksheet">12 Marksheet</button>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" data-tippy-content="Download 10 Marksheet">10 Marksheet</button>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" data-tippy-content="Download Domicile Certificate">Domicile Certificate</button>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" data-tippy-content="Download IncomeCertificate">Income Certificate</button> */}
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              Download:
            </p>
            <div className="block rounded-md shadow-sm" role="group">
              <button type="button" className="inline-flex items-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 ml-0 my-1">
                <svg aria-hidden="true" className="mr-2 w-6 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" /></svg>
                Adhar Card
              </button>
              <button type="button" className="inline-flex items-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 my-1">
                <svg aria-hidden="true" className="mr-2 w-6 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" /></svg>
                Marksheet-10
              </button>
              <button type="button" className="inline-flex items-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 my-1">
                <svg aria-hidden="true" className="mr-2 w-6 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" /></svg>
                Marksheet-12
              </button>
              <button type="button" className="inline-flex items-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 ml-0 my-1">
                <svg aria-hidden="true" className="mr-2 w-6 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" /></svg>
                Income Certificate
              </button>
              <button type="button" className="inline-flex items-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-2 my-1">
                <svg aria-hidden="true" className="mr-2 w-6 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" /></svg>
                Domicile Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentData;
