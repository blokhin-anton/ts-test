import React from 'react';
import ShortHews from 'src/ui/news/short';

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
  }
]

export const MainPage = () => {
  return <div>
    {
      testData.map(
        (news) => <ShortHews key={news.id} {...news}/>
      )
    }
  </div>
  
};
