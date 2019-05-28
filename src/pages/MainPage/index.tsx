import React from 'react';
import ShortHews from 'src/ui/news/short';

import styles from './styles.scss';

const testData = [
  {
    id: '1',
    title: 'title_1 title_1title_1title_1title 1title_1title_1title_1title 1title_1title_1title_1title_1title 1title_1title_1title_1title_1title_1title_1title_1title_1',
    previewText: 'string',
    tags: [
      {
        id: 1,
        text: 'string',
      }
    ]
  },
  {
    id: '2',
    title: 'title_2 title_1title_1title_1title 1title_1title_1title_1title 1title_1title_1title_1title_1title 1title_1title_1title_1title_1title_1title_1title_1title_1',
    previewText: 'string',
    tags: [
      {
        id: 1,
        text: 'string',
      }
    ]
  },
  {
    id: '3',
    title: 'title_3 title_1title_1title_1title 1title_1title_1title_1title 1title_1title_1title_1title_1title 1title_1title_1title_1title_1title_1title_1title_1title_1',
    previewText: 'string',
    tags: [
      {
        id: 1,
        text: 'string',
      }
    ]
  },
  {
    id: '4',
    title: 'title_4',
    previewText: 'string',
    tags: [
      {
        id: 1,
        text: 'string',
      }
    ]
  }
]

export const MainPage = () => {
  return (
    <div className={styles.group}>
      {
        testData.map(
          (news) => <ShortHews key={news.id} blockClassName={styles.groupElement} {...news}/>
        )
      }
    </div>
  );
  
};
