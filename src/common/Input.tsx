import Button from './Button';
import Styles from './Input.styled';

interface IProps {
    showButton?: boolean;
    handleChange?: (value: string) => void;
    handleSubmit?: () => void;
    label?: string;
    placeholder?: string;
}

const Input = (props: IProps) => {
    const { showButton, handleSubmit, handleChange, label, placeholder } =
        props;

    return (
        <Styles className="input-wrapper">
            <input
                type="text"
                className="input"
                placeholder={placeholder}
                onChange={(e) => handleChange && handleChange(e.target.value)}
            />
            {showButton && handleSubmit && label && (
                <article className="input-button-article">
                    <Button label={label} callback={handleSubmit} />
                </article>
            )}
        </Styles>
    );
};

export default Input;
