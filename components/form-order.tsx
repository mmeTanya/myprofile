import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from "../components/button";
import s from "../styles/form-order.module.scss";


const Form = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [errorsSubmit, setErrorsSubmit] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });


  const handleChange = ({ target: { name, value } }) => {
    setErrorsSubmit({
      name: '',
      email: '',
      phone: '',
      comments: '',
    });
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'comments':
        return setComments(value);
      default:
        return;
    }
  }

  const regexName = /^[a-z ,.'-]+$/i
  const regexEmail = /^\w([\.-]?\w+)*(\@\w{1,})*(\.\w{2,})$/;
  const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      phone: phone,
      comments: comments
    }

    if (name === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        name: 'required'
      }));
    } else
      if (!regexName.test(name)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          name: 'wrong'
        }));
      }
    if (email === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        email: 'required'
      }));
    } else
      if (!regexEmail.test(email)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          email: 'wrong'
        }));
      }
    if (phone === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        phone: 'required'
      }));
    } else
      if (!regexPhone.test(phone)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          phone: 'wrong'
        }));
      }
    if (comments === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        comments: 'required'
      }));
    }

    console.log(errorsSubmit)

    if (name === '' ||
      !regexName.test(name) ||
      email === '' ||
      !regexEmail.test(email) ||
      phone === '' || !regexPhone.test(phone)
      || comments === '') {
      return
    }

    const response = await fetch('/api/form', {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors'
    })
    const result = await response.json()
    reset()
    toast('Thank you !');
    onClose()
  }


  return (
    <form className={s.form_info} onSubmit={handleSubmit} autoComplete="off">
      <div className={s.form_field}>
        <label className={s.form_info__label} htmlFor="name">
          Name
        </label>
        <div className={s.input_group_absolute}>
          <input
            className={errorsSubmit.name === 'required' || errorsSubmit.name === 'wrong' ? s.input_group_absolute__input_red : s.input_group_absolute__input}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <span className={s.input_group_absolute__icon_name}></span>
        </div>
        {errorsSubmit.name === 'required' && <p className={s.error}>Name is required</p>}
        {errorsSubmit.name === 'wrong' && <p className={s.error}>Wrong name</p>}
      </div>
      <div className={s.form_field}>
        <label className={s.form_info__label} htmlFor="tel">
          Phone
        </label>
        <div className={s.input_group_absolute}>
          <input
            className={errorsSubmit.phone === 'required' || errorsSubmit.phone === 'wrong' ? s.input_group_absolute__input_red : s.input_group_absolute__input}
            type="tel"
            name="phone"
            id="tel"
            value={phone}
            onChange={handleChange}
          />
          <span className={s.input_group_absolute__icon_phone}></span>
        </div>
        {errorsSubmit.phone === 'required' && <p className={s.error}>Phone is required</p>}
        {errorsSubmit.phone === 'wrong' && <p className={s.error}>Wrong phone</p>}
      </div>
      <div className={s.form_field}>
        <label className={s.form_info__label} htmlFor="email">
          Email
        </label>
        <div className={s.input_group_absolute}>
          <input
            className={errorsSubmit.email === 'required' || errorsSubmit.email === 'wrong' ? s.input_group_absolute__input_red : s.input_group_absolute__input}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <span className={s.input_group_absolute__icon_mail}></span>
        </div>
        {errorsSubmit.email === 'required' && <p className={s.error}>Email is required</p>}
        {errorsSubmit.email === 'wrong' && <p className={s.error}>Wrong email</p>}
      </div>
      <div className={s.comments_field}>
        <label className={s.form_info__label} htmlFor="comments">
          Comments
        </label>
        <textarea
          className={errorsSubmit.comments === 'required' || errorsSubmit.comments === 'wrong' ? s.form_info__comments_red : s.form_info__comments}
          name="comments"
          id="comments"
          placeholder="Write text"
          value={comments}
          onChange={handleChange}
        >
        </textarea>
        {errorsSubmit.comments === 'required' && <p className={s.error}>Write text</p>}
      </div>
      <div className={s.button}>
        <Button theme={'no_animate'} type={'submit'} text={'Send'} />
      </div>
    </form>
  );
};

export default Form;
