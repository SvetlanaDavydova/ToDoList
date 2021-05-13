import "./input.scss";

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>;


const Input:React.FunctionComponent<InputProps>  = (props) => {
    return (
        <div className="input-container">
            <input
                {...props}
            />
        </div>
    );
}

export default Input;
