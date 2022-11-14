import React, { useState, useEffect } from 'react';
import Rotate from 'react-reveal/Rotate';
import { useSpring, a } from '@react-spring/web'
import Button from "../components/button";
import Loader from '../components/loader'
import s from "../styles/projects.module.scss";

const categories = [
  { id: 1, name: 'All', active: true },
  { id: 2, name: 'Website', active: false },
  { id: 3, name: 'Web application', active: false },
]

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filtredProjects, setFiltredProjects] = useState([]);
  const [flipped, set] = useState(false)
  const [status, setStatus] = useState(Status.IDLE);


  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  useEffect(() => {
    loadProjects()
  }, []);

  const loadProjects = async () => {
    const response = await fetch('/api/projects')
    setStatus(Status.PENDING)
    const result = await response.json()
    setProjects(result.projects)
    setFiltredProjects(result.projects);
    setStatus(Status.RESOLVED)
  }

  const filter = (e) => {
    let typeProject = e.target.textContent;
    activeButton(typeProject)
    typeProject !== "All"
      ? setFiltredProjects(filterProjects(typeProject))
      : setFiltredProjects(projects);
  }

  const filterProjects = (type) => {
    return projects.filter(project => project.category === type)
  }

  const activeButton = (type) => {
    categories.filter(category => category.name !== type).map(category => category.active = false)
    categories.filter(category => category.name === type).map(category => category.active = true)
    return categories
  }

  return (
    <section className={s.projects}>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        (<div className="container">
          <h1 className={s.projects__title}>Our projects</h1>
          <ul className={s.projects_menu}>
            {
              categories.map(category => (<li key={category.id} className={s.projects_menu__item}>
                <Button theme={category.active ? 'active_animate' : 'no_animate'} onClick={filter} type={'button'} text={category.name} />
              </li>))}
          </ul>
          <ul className={s.projects__list}>
            {filtredProjects &&
              filtredProjects.map(project => (
                <Rotate left>
                <li className={s.projects__item} key={project._id} onClick={() => set(state => !state)}>
                    <a.div style={{ opacity: opacity.to(o => 1 - o), transform }}>
                    <a className={s.projects__link} href={project.link}  >
                      <img src={project.image} alt={project.name}
                        width='450' height='460' className={s.projects__image} />
                      <div className={s.projects__describing}>
                        <p className={s.projects__name}> {project.name} </p>
                        <span className={s.projects__type}>{project.category}</span>
                      </div>
                      </a>
                    </a.div>
                    <a.div style={{ opacity, transform, rotateX: '180deg', }}>
                    </a.div>
                </li>
                </Rotate>
              ))
            }
          </ul>
        </div>)}
    </section>
  );
};

export default Projects;
