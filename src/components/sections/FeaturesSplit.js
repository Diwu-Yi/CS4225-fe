import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Visualisation works the best',
    paragraph: "Now, let's unveil : How weekly COVID cases caused people's sentiments to vary. Did we fear ? Did we joy ?"
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  In Singapore ...
                  </div>
                <h3 className="mt-0 mb-12">
                  Sentiments and Corresponding Weekly Cases against Time (Feb 2020 - Feb 2022)
                  </h3>
                <p className="m-0">
                  As cautious as Singaporeans are, it is not surprised to find out that people in Singapore have
                  displayed a continual high level of fear towards COVID. Furthermore, the percentage of fear sentiment also rises when there
                  is a rising wave of weekly cases before mid-January this year.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/feature-sg-case-time.png')}
                  alt="Features split 01"
                  width={600}
                  height={450} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  In the US ...
                  </div>
                <h3 className="mt-0 mb-12">
                  Sentiments and Corresponding Weekly Cases against Time (Feb 2020 - Feb 2022)
                  </h3>
                <p className="m-0">
                  People in the US are less worried about the COVID in general, displaying a lower level of fear through out
                  the two-year period except the very initial onset. But US people are more saddened, evidenced by higher percentage of sadness.
                  Also, the Delta wave in Q3 of 2021 has caused concern as indicated by the spike in fear sentiment.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/feature-us-case-time.png')}
                  alt="Features split 02"
                  width={600}
                  height={450} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  In India ...
                  </div>
                <h3 className="mt-0 mb-12">
                  Sentiments and Corresponding Weekly Cases against Time (Feb 2020 - Feb 2022)
                  </h3>
                <p className="m-0">
                  People in India have the most stable mood during these two years. The percentage of the sense of fear spikes as expected in the
                  initial onset, but quickly goes back to stablisation under 60%. Also, India is more sacred of the Omicron variant, but realised
                  soon that is not as bad.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/feature-in-case-time.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Comparison across the three countries
                  </div>
                <h3 className="mt-0 mb-12">
                  Sense of Fear Percentage against Time
                  </h3>
                <p className="m-0">
                  All have been scared in the very beginning, when nothing was known about COVID. From Q2 2020, differences in reactions
                  can be observed. While Singaporeans have remained cautious and fear the situation, US and India netizens are more quick
                  to make peace with the situation. Overall, Singapore is more of fear most of the time and US is more of indifference most
                  of the time. And India is somewhere in between.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/three-counties-fear-time.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Comparison across the three countries
                  </div>
                <h3 className="mt-0 mb-12">
                  Sense of Sadness Percentage against Time
                  </h3>
                <p className="m-0">
                  It may come across as a surprise that US netizens have displayed an observable higher percentage of sadness among
                  the three. This may be due to Americans being carefree towards COVID infection. Although
                  most will be fine, there are still deaths. According to Johns Hopkins' university's statistic, the US has more than
                  900,000 deaths. Their families and friends will definitely be saddened. In contrast, although Singapore has been
                  scared, this sentiment could have contributed to the low death toll and may thus contribute to the low level of sadness.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/three-countries-sadness-time.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;