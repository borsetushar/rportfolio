import React from 'react'
import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className='portfolio__project-image'>
            <img src={project.image} alt="Portfolio Project Image" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className='portfolio__project-cta'>
            <a href={project.demo} className='btn sm' target='_blank' rel='noopener noreferrer'>View</a>
            <a href={project.github} className='btn sm primary' target='_blank' rel='noopener noreferrer'>Github</a>
        </div>
    </Card>
  )
}

export default Project