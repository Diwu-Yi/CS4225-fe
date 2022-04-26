import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from "../../elements/Button";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <a href="https://github.com/Diwu-Yi/CS4225-fe#readme">
          <Button size="20px" color="dark" to="#0">About us</Button>
        </a>
      </ul>
    </nav>
  );
}

export default FooterNav;