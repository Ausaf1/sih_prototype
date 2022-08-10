/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function CreateInstitute() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      instituteName,
      instituteId,
      date,
      course,
      logo,
    };

    fetch('https://www.mecallapi.com/api/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // eslint-disable-next-line no-alert
        alert(result.message);
        if (result.status === 'ok') {
          window.location.href = '/';
        }
      });
  };
  const [instituteName, setinstituteName] = useState('');
  const [instituteId, setinstituteId] = useState('');
  const [date, setdate] = useState('');
  const [course, setcourse] = useState('');
  const [logo, setlogo] = useState('');

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
            type="text"
            placeholder="Id"
            onChange={(e) => setinstituteId(e.target.value)}
            label="Id"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Registration Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="date"
            placeholder="Date"
            onChange={(e) => setcourse(e.target.value)}
            label="Date"
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
            label="Course"
            onChange={(e) => setdate(e.target.value)}
            type="text"
            placeholder="janeDoe"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-1">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-image"
          >
            Logo
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-image"
            type="text"
            placeholder="Image link"
            label="Logo"
            onChange={(e) => setlogo(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default CreateInstitute;
