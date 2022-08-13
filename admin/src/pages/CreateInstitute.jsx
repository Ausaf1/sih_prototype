/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateInstitute() {
  const [instituteName, setinstituteName] = useState('');
  const [instituteId, setinstituteId] = useState('');
  const [instituteRegister, setinstituteRegister] = useState('');
  const [instituteCourse, setinstituteCourse] = useState('');

  // const [logoLink, setlogoLink] = useState('');
  const [password, setpasssword] = useState('');
  const navigate = useNavigate();
  const notify = () => toast.success('Institute Created Successfully');
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = {
    //   instituteName,
    //   instituteId,
    //   instituteRegister,
    //   password,
    //   instituteCourse,
    //   logoLink,
    // };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        '/api/admin/institute/create',
        {
          instituteName,
          instituteId,
          instituteRegister,
          password,
          instituteCourse,
        },
        config,
      );
      toast.success('Institute Created Successfully');
      navigate('/Institute%20List');
    } catch (err) {
      toast.error('Error in creating Institute');
    }
  };
  return (
    <form className="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Institute Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="instituteName"
            type="text"
            placeholder="Name"
            onChange={(e) => setinstituteName(e.target.value)}
            label="Name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Institute Id
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            name="instituteId"
            type="text"
            placeholder="Id"
            onChange={(e) => setinstituteId(e.target.value)}
            label="Id"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Add Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            name="password"
            type="text"
            placeholder="password"
            onChange={(e) => setpasssword(e.target.value)}
            label="password"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="date"
            name="instituteRegister"
            placeholder="instituteRegister"
            onChange={(e) => setinstituteRegister(e.target.value)}
            label="instituteRegister"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Course
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            name="instituteCourse"
            label="instituteCourse"
            onChange={(e) => setinstituteCourse(e.target.value)}
            type="text"
            placeholder="janeDoe"
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap mx-3 mb-1">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-image"
          >
            logoLink
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-image"
            name="logoLink"
            type="text"
            placeholder="Image link"
            label="logoLink"
            onChange={(e) => setlogoLink(e.target.value)}
          />
        </div>
      </div> */}
      <button
        type="submit"
        onClick={notify}
        className="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        SUBMIT
      </button>
      <ToastContainer position="top-left" />
    </form>
  );
}

export default CreateInstitute;
