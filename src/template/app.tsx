import React, {ComponentClass, FunctionComponent} from 'react';

import styles from './styles.scss';

const Header = (props: any) => {
  return <div {...props}/>
}

const Footer = (props: any) => {
  return <div {...props}/>
}

export default class Template extends React.Component {
  render() {
    return (
      <>
        <Header className={styles.headerContainer} />
        <div className={styles.contentContainer}>
          {this.props.children}
        </div>
        <Footer className={styles.footerContainer}/>
      </>
    )
  };
}
