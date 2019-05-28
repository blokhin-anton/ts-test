import React from 'react';

import FullArticle from 'src/ui/news/full';

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

const article: IProps = {
  id: 'string',
  title: 'string',
  content: 'any',
  tags: [{id:1,text:'string'}],
  comment: null
}

export const Article = () => {
  return (
    <div className={styles.articleConteiner}>
      <FullArticle {...article}/>
    </div>
  );
}
