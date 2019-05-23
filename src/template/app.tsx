import React from 'react';

import styles from './styles.scss';

const Header = (className: any) => {
  return <div/>
}

const Footer = () => {
  return <div/>
}

export default (Content: React.Component) => {
  return (
    <>
      <Header className={styles.headerContainer} />
      <div>
        {Content}
      </div>
      <Footer/>
    </>
  );
}
