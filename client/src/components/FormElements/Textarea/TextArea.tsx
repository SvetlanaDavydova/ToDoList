import "./textarea.scss";

export type InputProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>;


const TextArea:React.FunctionComponent<InputProps>  = (props) => {
    return (
        <div className="textarea-container">
            <textarea
                {...props}
            />
        </div>
    );
}

export default TextArea;
