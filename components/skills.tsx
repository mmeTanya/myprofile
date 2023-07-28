import Spring from '../components/spring'
import s from "../styles/skills.module.scss";


const Skills = () => {

  return (
    <section className={s.skills}>
      <div className='container'>
        <h2 className={s.skills__title}>My skills</h2>
        <Spring />
      </div>
    </section>
  );
};

export default Skills;
