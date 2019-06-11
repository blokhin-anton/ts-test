import React, { FunctionComponent } from 'react';

import links from '@links';

import style from './style.scss';

interface ITag {
    id: string,
    text: string,
    icon?: string,
    style?: string
  }

const TagContent = (title: string) => {
  return (
    <>
      <div className={style.tagIcon}></div>
      <p className={style.tagText}>{title}</p>
    </>
  );
}

const Tag = (props: ITag) => {
  return (
    <div className={style.tagBlock}>
      {
        links.tag(props.id, TagContent(props.text))
      }
    </div>
  );
}

export default (tags: Array<ITag>) => {
  return (
    <div className={style.tagsBlock}>
      {
        tags.map(
          (tag) => <Tag key={tag.id} {...tag}/>
        )
      }
    </div>
  );
}
