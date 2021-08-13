import Styles from './LandingPage.styled';
import SubscriptionBanner from './components/SubscriptionBanner';
import AppSection from './components/AppSection';
import AppStores from './components/AppStores';

export const LandingPage = () => {
    return (
        <Styles className="landing-page-wrapper">
            <SubscriptionBanner />
            <AppSection />
            <AppStores />
        </Styles>
    );
};
