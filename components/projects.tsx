import { useState, useEffect } from 'react';
import Button from "../components/button";
import s from "../styles/projects.module.scss";

const categories = [
  { id: 1, name: 'All', active: true },
  { id: 2, name: 'Website', active: false },
  { id: 3, name: 'Design', active: false },
  { id: 4, name: 'Application', active: false },
  { id: 5, name: 'Marketing', active: false },

]

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filtredProjects, setFiltredProjects] = useState([]);

  useEffect(() => {
    loadProjects()
  }, []);

  const loadProjects = async () => {
    const response = await fetch('/api/projects')
    const result = await response.json()
    console.log(result)
    setProjects(result.projects)
    setFiltredProjects(result.projects);
  }

  const filter = (e) => {
    let typeProject = e.target.textContent;
    activeButton(typeProject)
    typeProject !== "All"
      ? setFiltredProjects(filterProjects(typeProject))
      : setFiltredProjects(projects);
    console.log(filtredProjects)
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
      <div className="container">
        <h1 className={s.projects__title}>Our projects</h1>
        <ul className={s.projects_menu}>
          {
            categories.map(category => (<li key={category.id} className={s.projects_menu__item}><Button theme={category.active ? 'blue' : 'white'} onClick={filter} type={'button'} text={category.name} active={category.active} /></li>))}
        </ul>
        <ul className={s.projects__list}>
          {filtredProjects &&
            filtredProjects.map(project => (
              <li className={s.projects__item} key={project._id}>
                <div className={s.projects__thumb}>
                  <img src={project.photo} alt={project.name}
                    width='450' height='460' className={s.projects__image} />
                  <div className={s.projects__overlay}>
                    <p className={s.projects__info}>{project.text}</p>
                  </div>
                </div>
                <div className={s.projects__describing}>
                  <p className={s.projects__name}> {project.name} </p>
                  <span className={s.projects__type}>{project.category}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Projects;
