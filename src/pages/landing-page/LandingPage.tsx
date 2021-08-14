import SubscriptionBanner from './components/SubscriptionBanner';
import AppSection from './components/AppSection';
import AppStores from './components/AppStores';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

export const LandingPage = () => {
    return (
        <>
            <SubscriptionBanner />
            <AppSection />
            <AppStores />
            <AboutMe />
            <Footer />
        </>
    );
};
