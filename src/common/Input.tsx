import { RequestState } from '../types/common';
import Button from './Button';
import Styles from './Input.styled';
import Loading from '../icons/Loading';
import Success from '../icons/Success';
import Failed from '../icons/Failed';

interface IProps {
    showButton?: boolean;
    handleChange?: (value: string) => void;
    handleSubmit?: () => void;
    label?: string;
    placeholder?: string;
    requestState: RequestState | null;
}

const Input = (props: IProps) => {
    const {
        showButton,
        handleSubmit,
        handleChange,
        label,
        placeholder,
        requestState,
    } = props;

    const stateMapping = {
        [RequestState.failed]: <Failed />,
        [RequestState.loading]: <Loading />,
        [RequestState.success]: <Success />,
    };

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
                    <Button
                        label={
                            requestState ? stateMapping[requestState] : label
                        }
                        callback={handleSubmit}
                    />
                </article>
            )}
        </Styles>
    );
};

export default Input;
