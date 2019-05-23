import React from 'react';

import styles from './styles.scss';

interface ITag {
  id: number,
  text: string,
  style?: string
}

interface IProps {
  id: string,
  title: string,
  content: any,
  tags: Array<ITag>,
  comment: any
}

const Content = (content: any) => {
  content;
  return <div></div>
}
const Tag = (tag: any) => {
  tag;
  return <div></div>
}
const Comment = (comment:any) => {
  comment;
  return <div></div>;
}

export const FullHews = (props: IProps) => {
  return(
    <div className={styles.fullBlock}>
      <div className={styles.fullBlockTitle}>
        <h2>
          {props.title}
        </h2>
      </div>
      <div className={styles.fullBlockContent}>
        <Content content={props.content}/>
      </div>
      <div className={styles.fullBlockTagsPanel}>
        { 
          props.tags.map(
            (tag) => <Tag kay={tag.id} tag={tag}/>
          )
        }
      </div>
      <div className={styles.fullBlockComment}>
        <Comment comment={props.comment}/>
      </div>
    </div>
  );
}
