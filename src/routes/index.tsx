import React, { ComponentClass, FunctionComponent } from 'react';

import * as pages from 'src/pages';

export const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    component: pages.MainPage
  },
  {
    name: 'Article',
    path: '/article/:id',
    isExact: true,
    component: pages.Article
  },
  {
    name: 'Tag',
    path: '/tag/:id',
    isExact: true,
    component: pages.Article
  },  
  {
    name: 'Not Found',
    path: '*',
    isExact: false,
    component: pages.NotFoundPage
  },
];

interface IRoute {
  name: string;
  path: string;
  isExact: boolean;
  component: ComponentClass | FunctionComponent;
}
