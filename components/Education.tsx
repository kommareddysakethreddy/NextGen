'use client'

import { FaGraduationCap } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const education = [
  {
    year: '2024 - 2026',
    degree: "Masters in Computer Science",
    school: "Oregon State University",
    location: "Corvallis, OR",
    gpa: "3.89 / 4.0",
    description:
      "Courses: Machine Learning, Deep Learning, Natural Language Processing,Computer Vision, Database Management System,Parallel Programming, Programming Languages, Human Computer Interaction.",
  },
  {
    year: '2020 - 2024',
    degree: "B.Tech in Computer Science",
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    gpa: "3.54 / 4.0",
    description:
      "Graduated with strong foundation in software engineering, algorithms, and project-based learning.",
  },
]

const EducationTimeline = () => {
  return (
    <section id="education" className="bg-white py-20 px-6 md:px-20 ">
      <div className="max-w-5xl mx-auto " >
        <div className="max-w-6xl mx-auto">
            <SectionTitle title="Education" />
        </div>

        <div className="relative border-l-4 border-gray-300 ml-6">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Icon circle */}
             <div className="absolute left--3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow">
  <FaGraduationCap className="text-white" />
</div>



              {/* Content block */}
              <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full md:w-3/4 ml-4">
                <p className="text-sm text-gray-500 font-medium mb-1">{edu.year}</p>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                {/* <p className="italic text-gray-600">{edu.school}, {edu.location}</p> */}
                <p className="italic text-gray-600">{edu.school}, {edu.location}</p>
{edu.gpa && (
  <p className="text-sm text-gray-500 mt-1"><span className="font-semibold">GPA:</span> {edu.gpa}</p>
)}

                <p className="mt-2 text-gray-700">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline
