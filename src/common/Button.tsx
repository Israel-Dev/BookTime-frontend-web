import Styles from './Button.styled';

interface IProps {
    label: string | JSX.Element | null;
    callback: () => void;
}

const Button = (props: IProps) => {
    const { label, callback } = props;

    return (
        <Styles className="button-wrapper" onClick={callback}>
            {label}
        </Styles>
    );
};

export default Button;
