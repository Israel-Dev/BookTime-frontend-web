import Styles from './LandingPage.styled';
import SubscriptionBanner from './components/SubscriptionBanner';
import AppSection from './components/AppSection';
import AppStores from './components/AppStores';
import AboutMe from './components/AboutMe';

export const LandingPage = () => {
    return (
        <Styles className="landing-page-wrapper">
            <SubscriptionBanner />
            <AppSection />
            <AppStores />
            <AboutMe />
        </Styles>
    );
};
