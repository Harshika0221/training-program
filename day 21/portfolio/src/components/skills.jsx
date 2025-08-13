import React from 'react';

const skillsData = [
  { id: 1, name: 'JavaScript', category: 'Languages' },
  { id: 2, name: 'React', category: 'Frameworks' },
  { id: 3, name: 'CSS', category: 'Languages' },
  { id: 4, name: 'Vite', category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Skills Showcase</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        {skillsData.map(skill => (
          <div key={skill.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '150px' }}>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;