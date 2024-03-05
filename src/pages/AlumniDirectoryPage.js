import React, { useState } from 'react';
import AlumniList from '../components/AlumniList';
import AlumniSearchForm from '../components/AlumniSearchForm';
import AlumniAchievements from '../components/AlumniAchievements';
import '../styles/Alumnidirectory/AlumniDirectory.css'


const AlumniDirectoryPage = () => {
  // Mock data for demonstration purposes
  const allAlumniData = [
    { id: 1, name: 'Barrack Amuyunzu', classYear: 2018, contact: 'odaribq@gmail.com' },
    { id: 2, name: 'Steven Miyawa', classYear: 2023, contact: 'jane@example.com' },
    { id: 1, name: 'Daniel Simiyu', classYear: 2019, contact: 'john@example.com' },
    { id: 2, name: 'Moris Okota', classYear: 2020, contact: 'jane@example.com' },
    
  ];

  const [searchResults, setSearchResults] = useState([]);
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (searchTerm, selectedClass) => {
    if (!searchTerm) {
      setSearchResults([]);
      setShowList(false);
      setSearchQuery('');
    } else {
      const filteredAlumni = allAlumniData.filter((alumni) =>
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedClass === '' || alumni.classYear.toString() === selectedClass)
      );

      setSearchResults(filteredAlumni);
      setShowList(true);
      setSearchQuery(searchTerm);
    }
  };

  const renderNoDataMessage = () => {
    if (searchQuery === '') {
      return <h2>Type a name to search</h2>;
    } else {
      return <h2>No data found for "{searchQuery}"</h2>;
    }
  };
  const achievementsData = [
    'Awarded Best in Business, 2010',
    'Published a bestselling novel, 2015',
    'Invented groundbreaking technology, 2018',
    // Add more achievements as needed
  ];
  return (
    <div className="alumni-directory-page">
      <h1>Alumni Directory</h1>
      <AlumniSearchForm onSearch={handleSearch} />
      {showList ? (
        <>
          {searchResults.length > 0 ? (
            <>
              <AlumniList alumniData={searchResults} />
              <AlumniAchievements achievements={achievementsData} />
            </>
          ) : (
            renderNoDataMessage()
          )}
        </>
      ) : null}
    </div>
  );
};

export default AlumniDirectoryPage;