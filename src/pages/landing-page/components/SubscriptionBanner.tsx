import Styles from './SubscriptionBanner.styled';
import lineSeparator from '../../../assets/line-separator.svg';
import books from '../../../assets/books.png';
import bookOverlay from '../../../assets/book-shape-overlay.svg';
import Input from '../../../common/Input';
import { useEffect, useState } from 'react';
import UserController from '../../../api/controllers/user.controler';
import { RequestState } from '../../../types/common';
import Toast from '../../../common/Toast';

const SubscriptionBanner = () => {
    const [email, setEmail] = useState('');
    const [requestState, setRequestState] = useState<RequestState | null>(null);
    const [requestMessage, setRequestMessage] = useState<string | null>('');

    const saveNewUser = async () => {
        if (requestState !== null) return;
        try {
            setRequestState(RequestState.loading);

            const responseData = await UserController.saveNewUser(email);

            if (!responseData) {
                setRequestState(RequestState.failed);
                return setRequestMessage('Email is not valid');
            }

            setRequestMessage(responseData.message);

            switch (responseData.status) {
                case 200:
                    setRequestState(RequestState.success);
                    return;
                case 400:
                default:
                    setRequestState(RequestState.failed);
                    return;
            }
        } catch (e) {
            console.error(e);
            setRequestState(RequestState.failed);
        }
    };

    useEffect(() => {
        if (requestState !== null) {
            setTimeout(() => {
                setRequestState(null);
            }, 3000);
        }
    }, [requestState]);

    return (
        <Styles className="subscription-banner-wrapper">
            <header className="subscription-banner-header">
                <p className="subscription-banner-p">Reading App</p>
                <h1 className="subscription-banner-h1 courgette">BookTime</h1>
            </header>
            <img
                src={lineSeparator}
                alt="linie-separator"
                className="subscription-banner-line-separator"
            />
            <section className="subscription-banner-section">
                <p>A little each day, a lot each week</p>
                <Input
                    requestState={requestState}
                    showButton={true}
                    handleChange={setEmail}
                    handleSubmit={saveNewUser}
                    label="Subscribe"
                    placeholder="email@example.com"
                />
                {requestState &&
                    requestState !== RequestState.loading &&
                    requestMessage && (
                        <Toast type={requestState} message={requestMessage} />
                    )}
                <p>Find out as soon as the app launches!</p>
            </section>
            <img
                src={books}
                alt="booktime-background"
                className="subscription-banner-background-image"
            />
            <img
                src={bookOverlay}
                alt="subscription-banner-book-overlay"
                className="subscription-banner-book-overlay"
            />
        </Styles>
    );
};

export default SubscriptionBanner;
