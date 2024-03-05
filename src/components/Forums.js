
import React, { useState } from 'react';
import '../styles/ClassandForumn/Forum.css'; 
import { FaComment } from 'react-icons/fa'; 

const Forum = () => {
  
  const forumData = [
    { id: 1, title: 'General Discussion', posts: 25 },
    { id: 2, title: 'Alumni Events', posts: 18 },
    
  ];

  const [selectedForum, setSelectedForum] = useState(null);

  const handleForumClick = (forumId) => {
    setSelectedForum(forumId);
    
    console.log(`Navigating to Forum ${forumId}`);
  };

  return (
    <div className="forum-container">
      <h2>Alumni Forums</h2>
      <ul>
        {forumData.map((forum) => (
          <li key={forum.id} className={selectedForum === forum.id ? 'selected-forum' : ''}>
            <div className="forum-info" onClick={() => handleForumClick(forum.id)}>
              <h3>{forum.title}</h3>
              <p>{forum.posts} Posts</p>
            </div>
            <FaComment className="comment-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
