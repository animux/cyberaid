import './Button.css';

const Button = (props) => {
    return (
        <div className="button">
            <a className="button-primary" style={{backgroundColor: props.color}}>{ props.text }</a>
        </div>
    )
}

export default Button;