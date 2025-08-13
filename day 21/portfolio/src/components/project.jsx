import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Harshika0221/repos?sort=updated&per_page=6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="projects" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Projects Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {repos.slice(0, 6).map(repo => (
          <div key={repo.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description provided.'}</p>
            <div style={{ marginTop: '10px' }}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                Source Code
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;