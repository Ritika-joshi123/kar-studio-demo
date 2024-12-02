import { FC } from 'react';
import {
  AboutKarStudioSections,
  CarListing,
  FAQ,
  PhotographySkills,
  SubscribeLetter,
  WelcomeSection,
} from './Components';

const Dashboard: FC = () => {
  return (
    <>
      <WelcomeSection />
      <CarListing />
      <AboutKarStudioSections />
      <PhotographySkills />
      <FAQ />
      <SubscribeLetter />
    </>
  );
};

export default Dashboard;
