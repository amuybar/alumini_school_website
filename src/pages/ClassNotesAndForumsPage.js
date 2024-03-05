import React from 'react';
import AlumniSpotlight from '../components/AlumniSpotlight';
import Forum from '../components/Forums';
import '../styles/ClassandForumn/ClassNotesAndForumsPage.css'

const ClassNotesAndForumsPage = () => {
  return (
    <div className='page-content '>
      <h1>Spotlight and Forums</h1>
      <AlumniSpotlight />
      <Forum/>
    </div>
  );
};

export default ClassNotesAndForumsPage;
