import SubscriptionBanner from './components/SubscriptionBanner';
import AppSection from './components/AppSection';
import Styles from './LandingPage.styled';

export const LandingPage = () => {
    return (
        <Styles className="landing-page-wrapper">
            <SubscriptionBanner />
            <AppSection />
        </Styles>
    );
};
