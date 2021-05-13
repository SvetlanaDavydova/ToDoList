import "./button.scss";

export type InputProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;


const Button:React.FunctionComponent<InputProps>  = (props) => {
    return (
        <div className="button-container">
            <button {...props}>
                {props.children}
            </button>
        </div>
    );
}

export default Button;
