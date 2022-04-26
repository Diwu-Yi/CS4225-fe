import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Calendar from 'react-calendar';
import TopK from '../../utils/TopKUtils';
import BarChart from '../../utils/BarChar';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor, pushLeft, imageFill, invertMobile, invertDesktop, alignTop,
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const [value, onChange] = useState(new Date("2022-01-01"));
  console.log(value)

  const moment = require('moment');
  const dateFormat1 = moment(value).format('YYYY_MM_DD');
  const dateFormat2 = moment(value).format('DD/MM/YYYY');

  const [showIndia, setShowIndia] = useState(true);

  const [showSingapore, setShowSingapore] = useState(false);

  const [showUs, setShowUs] = useState(false);

  const showIndiaOnly = () => {
    setShowIndia(true);
    setShowSingapore(false);
    setShowUs(false);
  }

  const showSingaporeOnly = () => {
    setShowUs(false);
    setShowSingapore(true);
    setShowIndia(false);
  }

  const showUsOnly = () => {
    setShowUs(true);
    setShowIndia(false);
    setShowSingapore(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to COVID TWEETS sentiments visualisation <span className="text-color-primary">done for CS 4225</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Have you ever wondered how people in SG, US or India using twitter have been feeling towards the COVID situation ?
                </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Select a date to find out the sentiments and the 20 most frequent words in their tweets.
                </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                * Note that data is available from 1st Feb 2020 to 1st Feb 2022, if date selected is beyond this range, we will display the data on the nearest available date.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile onClick={()=>setShowCalendar(!showCalendar)}>
                    Select a Date
                    </Button>
                  <Button tag="a" color="dark" wideMobile onClick={() => showSingaporeOnly()}>
                    Show SG
                    </Button>
                  <Button tag="a" color="dark" wideMobile onClick={() => showUsOnly()}>
                    Show US
                    </Button>
                  <Button tag="a" color="dark" wideMobile onClick={() => showIndiaOnly()}>
                    Show India
                    </Button>
                </ButtonGroup>
              </div>
              <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-delay="500" style={{ marginTop:"50px", marginBottom:"50px" }}>
              {showCalendar ? <Calendar
                className="has-shadow"
                onChange={onChange}
                value={value}
                alt="Hero"
                /> : null}
          </div>
            </div>

            <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="float-child" style={{height: 450, width: 450}}>
                  <BarChart country={showIndia ? "IN" :
                  showUs ? "US" :
                  showSingapore ? "SG" :
                  "IN"} dateProvided={value > new Date("2022-02-01") ? "2022_02_01" :
                      value < new Date("2020-02-01") ? "2020_02_01" :
                  dateFormat1.toString()}/>
                </div>
              </div>
              <div className="float-child" style={{height: 450, width: 450}}>
                <TopK country={showIndia ? "IN" :
                  showUs ? "US" :
                  showSingapore ? "SG" :
                  "IN"} dateProvided={value > new Date("2022-02-01") ? "01/02/2022" :
                    value < new Date("2020-02-01") ? "01/02/2020" :
                  dateFormat2.toString()}/>
              </div>
            </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;