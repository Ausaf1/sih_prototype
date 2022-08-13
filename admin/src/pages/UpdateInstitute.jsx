/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function UpdateInstitute() {
  const { id } = useParams();
  const [instituteId, setinstituteId] = useState('');
  const [instituteName, setinstituteName] = useState('');
  const [instituteCourse, setinstituteCourse] = useState('');
  const [status, setstatus] = useState('');
  const [instituteRegister, setinstituteRegister] = useState('');

  const navigate = useNavigate();

  const getInstitute = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(`/api/admin/institute/${id}`, config);
      setinstituteId(res.data.data.instituteId);
      setinstituteName(res.data.data.instituteName);
      setinstituteCourse(res.data.data.instituteCourse);
      setstatus(res.data.data.status);
      setinstituteRegister(res.data.data.instituteRegister);
    } catch (err) {
      toast.error('Error in fetching Institute');
    }
  };
  useEffect(() => {
    getInstitute();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.put(
        `/api/admin/institute/update/${id}`,
        {
          instituteId,
          instituteName,
          instituteCourse,
          instituteRegister,
          status,
        },
        config,
      );
      toast.success('Institute Updated Successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/Institute%20List');
    } catch (err) {
      toast.error('Error in updating Institute', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     id,
  //     instituteId,
  //     instituteName,
  //     instituteCourse,
  //     password,
  //   // //   instituteRegister,
  //   };
  //   fetch(`http://localhost:5000/api/admin/institute/update/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       Accept: 'application/form-data',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         alert(result.message);
  //         if (result.status === 'ok') {
  //           window.location.href = '/';
  //         }
  //       },
  //     );
  // };

  return (
    <form className="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Institute ID
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={instituteId}
            onChange={(e) => setinstituteId(e.target.value)}
            label="Institute ID"
          />

        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Institute Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            value={instituteName}
            onChange={(e) => setinstituteName(e.target.value)}
            label="Institute Name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Status
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="status"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            label="status"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Course
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            label="Course"
            onChange={(e) => setinstituteCourse(e.target.value)}
            type="text"
            value={instituteCourse}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Register Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            label="Register Date"
            onChange={(e) => setinstituteRegister(e.target.value)}
            type="date"
            value={instituteRegister}
          />
        </div>
      </div>
      {/* {/* <div className="flex flex-wrap mx-3 mb-1">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
            Register
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-image"
            type="text"
            value={instituteRegister}
            label="instituteRegister"
            onChange={(e) => setinstituteRegister(e.target.value)}
          />
        </div>
      </div> */}
      <button type="submit" className="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Update
      </button>
      <ToastContainer />
    </form>
  );
}

export default UpdateInstitute;
