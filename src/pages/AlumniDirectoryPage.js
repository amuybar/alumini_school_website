import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlumniList from '../components/AlumniList';
import AlumniSearchForm from '../components/AlumniSearchForm';
import AlumniAchievements from '../components/AlumniAchievements';
import '../styles/Alumnidirectory/AlumniDirectory.css'

const AlumniDirectoryPage = () => {
  const [allAlumniData, setAllAlumniData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/alumni');
        const transformedAlumniData = response.data.map((alumni) => ({
          id: alumni.id,
          name: alumni.name,
          classYear: alumni.year,
          contact: `${alumni.email} - ${alumni.phone}` // Combine email and phone as contact
        }));
        setAllAlumniData(transformedAlumniData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
        setLoading(false);
      }
    };
  
    fetchAlumniData();
  }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default AlumniDirectoryPage;
