import React from 'react';
import { Link } from 'react-router-dom';

// import Img from '@ui/image';
import Tags from '@ui/tag';

import links from 'src/routes/links';

import styles from './styles.scss';

interface ITag {
  id: number,
  text: string,
  style?: string
}

interface IProps {
  id: string,
  blockClassName?: string,
  title: string,
  previewImage?: { src: string, alt: string },
  previewText: string
  tags: Array<ITag>
}

const Image = (image:any) => {
  image;
  return <div></div>
}
const Text = (text:any) => {
  text;
  return <div></div>
}



export default (props: IProps) => {
  return(
    <div className={props.blockClassName || styles.shortBlock}>
      <div className={styles.shortBlock}>
        <div className={styles.shortBlockTitle}>
          <h2>
            {links.article(props.id, props.title)}
          </h2>
        </div>
        <div className={styles.shortBlockContent}>
          <div className={styles.shortBlockContentImage}>
            {
              props.previewImage 
                && <Image src={props.previewImage.src} alt={props.previewImage.alt || props.title} />
            }
          </div>
          <div className={styles.shortBlockContentText}>
            <Text text={props.previewText}/>
          </div>
        </div>
        <div className={styles.shortBlockTagsPanel}>
          <Tags {...props.tags}/>
        </div>
      </div>
    </div>
  );
}
