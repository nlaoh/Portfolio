import dynamic from 'next/dynamic';
import { FC, memo, useRef } from 'react';

import useOnScreen from '../hooks/useOnScreen';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  // Section animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useOnScreen(heroRef);
  const isAboutVisible = useOnScreen(aboutRef);
  const isResumeVisible = useOnScreen(resumeRef);
  const isPortfolioVisible = useOnScreen(portfolioRef);
  const isTestimonialsVisible = useOnScreen(testimonialsRef);
  const isContactVisible = useOnScreen(contactRef);
  const isFooterVisible = useOnScreen(footerRef);

 return (
    <Page description={description} title={title}>
      <Header />
      <div
        className={`${
          isHeroVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={heroRef}
      >
        <Hero />
      </div>
      <div
        className={`${
          isAboutVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={aboutRef}
      >
        <About />
      </div>
      <div
        className={`${
          isResumeVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={resumeRef}
      >
        <Resume />
      </div>
      <div
        className={`${
          isPortfolioVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={portfolioRef}
      >
        <Portfolio />
      </div>
      <div
        className={`${
          isTestimonialsVisible ? 'animate-fade-in' : 'not-visible'
        }`}
        ref={testimonialsRef}
      >
        <Testimonials />
      </div>
      <div
        className={`${
          isContactVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={contactRef}
      >
        <Contact />
      </div>
      <div
        className={`${
          isFooterVisible ? 'animate-slide-in-from-bottom' : 'not-visible'
        }`}
        ref={footerRef}
      >
        <Footer />
      </div>
    </Page>
  );
});

export default Home;
