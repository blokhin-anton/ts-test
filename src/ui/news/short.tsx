import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

interface ITag {
  id: number,
  text: string,
  style?: string
}

interface IProps {
  id: string,
  title: string,
  previewImage?: string,
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
const Tag = (tag: any) => {
  tag;
  return <div></div>
}

export default (props: IProps) => {
  return(
    <div className={styles.shortBlock}>
      <div className={styles.shortBlockTitle}>
        <h2>
          <Link to={`news/${props.title}`}>
            {props.title}
          </Link>
        </h2>
      </div>
      <div className={styles.shortBlockContent}>
        <div className={styles.shortBlockContentImage}>
          {props.previewImage && <Image image={props.previewImage} />}
        </div>
        <div className={styles.shortBlockContentText}>
          <Text text={props.previewText}/>
        </div>
      </div>
      <div className={styles.shortBlockTagsPanel}>
        { 
          props.tags.map(
            (tag) => <Tag kay={tag.id} tag={tag}/>
          )
        }
      </div>
    </div>
  );
}
