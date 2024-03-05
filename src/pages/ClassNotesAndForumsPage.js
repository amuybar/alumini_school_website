import React from 'react';
import ClassNotes from '../components/ClassNotes';
import Forums from '../components/Forums';

const ClassNotesAndForumsPage = () => {
  return (
    <div className='page-container'>
      <h1>Class Notes and Forums</h1>
      <ClassNotes />
      <Forums />
    </div>
  );
};

export default ClassNotesAndForumsPage;
