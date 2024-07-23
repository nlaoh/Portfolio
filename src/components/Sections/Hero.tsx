import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, secondaryName, name, description, actions} = heroData;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Wrap the onLoad function with useCallback
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className={classNames(
            'absolute z-0 h-full w-full object-cover transition-opacity duration-1000',
            {'opacity-100': imageLoaded, 'opacity-0': !imageLoaded}
          )}
          onLoad={handleImageLoad} // Use the memoized function here
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl relative"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px white', // WebKit browsers (Safari, Chrome)
                // textStroke: '0.5px white' /* Standard */,
              }}
            >
              {secondaryName}
            </h1>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl relative">{name}</h1>

            {description && <div className="text-white">{description}</div>}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={primary ? href : `#${SectionId.Contact}`} // Open PDF link in new tab, others in same tab
                  key={text}
                  rel={primary ? 'noopener noreferrer' : ''} // Security best practices for '_blank' links
                  target={primary ? '_blank' : '_self'} // Use '_blank' for new tab, '_self' for same tab
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;