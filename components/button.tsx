import s from '/styles/button.module.scss';

let className = ''
const getStyledButton = theme => {
  switch (theme) {
    case 'blue':
      className = s.blue
      return
    case 'white':
      className = s.white

    default:
      return {};
  }
};

const Button = ({ text, theme, onClick, type }) => {

  getStyledButton(theme)

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;