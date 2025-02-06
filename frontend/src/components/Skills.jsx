import React, { useEffect, useState } from 'react';
import api from '../api'


const SkillsShowcase = () => {

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => { 
    const fetchSkills = async () => {
      try {
        const response = await api.get('/api/skills/');
        setSkills(response.data);
        console.log(response)
      }
      catch (error) {
        console.error('error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  // const skills = [
  //   { name: "React", level: "Intermediate" },
  //   { name: "JavaScript", level: "Intermediate" },
  //   { name: "CSS/Tailwind", level: "Intermediate" },
  //   { name: "Python", level: "Advanced" },
  //   { name: "Django", level: "Intermediate" },
  //   { name: "PostgreSQL", level: "Intermediate" },
  //   { name: "MySQL", level: "Intermediate" }
  // ];



  return (
    <div className="max-w-4xl mx-auto py-16 px-4" style={{ marginBottom: '10rem' }}>
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 flex items-center justify-between"
          >
            <span className="font-medium text-gray-800">{skill.name}</span>
            <span className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;