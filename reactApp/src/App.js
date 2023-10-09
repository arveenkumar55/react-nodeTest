// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        <img src={story.multimedia[0].url} alt={story.title} />
        <h3>{story.title}</h3>
      </a>
    </div>
  );
};


function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/'; // Get your API key from NY Times developer portal

    axios
      .get(apiUrl)
      .then((response) => {
        setStories(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Top Stories</h1>
      <div className="story-list">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </div>
  );
}

export default App;
