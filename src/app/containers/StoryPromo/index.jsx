import React, { Fragment, useContext } from 'react';
import { shape, bool } from 'prop-types';
import StoryPromoComponent, {
  Headline,
  Summary,
  Link,
  LiveLabel,
} from '@bbc/psammead-story-promo';
import Timestamp from '@bbc/psammead-timestamp-container';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import pathOr from 'ramda/src/pathOr';
import { storyItem } from '../../models/propTypes/storyItem';
import ImageWithPlaceholder from '../ImageWithPlaceholder';

import { ServiceContext } from '../../contexts/ServiceContext';
import createSrcset from '../Image/helpers/srcSet';
import getOriginCode from './imageSrcHelpers/originCode';
import getLocator from './imageSrcHelpers/locator';

import LinkContents from './LinkContents';
import MediaIndicator from './MediaIndicator';

const StoryPromoImage = ({ imageValues, lazyLoad }) => {
  if (!imageValues) {
    return null;
  }

  const { height, width, path } = imageValues;

  const ratio = (height / width) * 100;
  const originCode = getOriginCode(path);
  const locator = getLocator(path);
  const srcset = createSrcset(originCode, locator, width);

  const DEFAULT_IMAGE_RES = 660;
  const src = `https://ichef.bbci.co.uk/news/${DEFAULT_IMAGE_RES}${path}`;

  return (
    <ImageWithPlaceholder
      alt={imageValues.altText}
      ratio={ratio}
      src={src}
      {...imageValues}
      lazyLoad={lazyLoad}
      copyright={imageValues.copyrightHolder}
      srcset={srcset}
    />
  );
};

StoryPromoImage.propTypes = {
  lazyLoad: bool.isRequired,
  imageValues: shape(storyItem.indexImage).isRequired,
};

const StoryPromo = ({ item, lazyLoadImage, topStory }) => {
  const { script, datetimeLocale, service } = useContext(ServiceContext);
  const headline = pathOr(null, ['headlines', 'headline'], item);
  const url = pathOr(null, ['locators', 'assetUri'], item);
  const summary = pathOr(null, ['summary'], item);
  const timestamp = pathOr(null, ['timestamp'], item);
  const isLive = pathOr(null, ['cpsType'], item) === 'LIV';
  const timeNow = Math.round(new Date().getTime() / 1000);
  let isRelative = true;

  if (timeNow - timestamp > 86400) {
    isRelative = false;
  }

  if (!headline || !url) {
    return null;
  }

  const LiveComponent = () => (
    /* eslint-disable-next-line jsx-a11y/aria-role */
    <span role="text">
      <LiveLabel service={service} dir="ltr">
        LIVE
      </LiveLabel>
      <VisuallyHiddenText lang="en-GB">Live, </VisuallyHiddenText>
      {headline}
    </span>
  );

  const Info = (
    <Fragment>
      {headline && (
        <Headline script={script} service={service} topStory={topStory}>
          <Link href={url} isLive>
            {isLive ? (
              <LiveComponent service={service} headline={headline} />
            ) : (
              <LinkContents item={item} />
            )}
          </Link>
        </Headline>
      )}
      {summary && (
        <Summary script={script} service={service} topStory={topStory}>
          {summary}
        </Summary>
      )}
      {timestamp && (
        <Timestamp
          locale={datetimeLocale}
          timestamp={timestamp * 1000}
          dateTimeFormat="YYYY-MM-DD"
          format="D MMMM YYYY"
          script={script}
          padding={false}
          service={service}
          isRelative={isRelative}
        />
      )}
    </Fragment>
  );

  const imageValues = pathOr(null, ['indexImage'], item);
  const Image = (
    <StoryPromoImage lazyLoad={lazyLoadImage} imageValues={imageValues} />
  );

  return (
    <StoryPromoComponent
      image={Image}
      info={Info}
      mediaIndicator={
        <MediaIndicator item={item} topStory={topStory} service={service} />
      }
      topStory={topStory}
      isLive={isLive}
    />
  );
};

StoryPromo.propTypes = {
  item: shape(storyItem).isRequired,
  lazyLoadImage: bool,
  topStory: bool,
};

StoryPromo.defaultProps = {
  lazyLoadImage: true,
  topStory: false,
};

export default StoryPromo;
