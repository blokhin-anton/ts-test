import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLink = (title: string) => {
  return <>{title}</>;
}

const link = (path: string, content: JSX.Element | string, style?: any) => {
  return (
    <Link to={path}>
      {content}
    </Link>
  );
}

export default class Links {
  static home = 
    (content: JSX.Element | string) => link('/', content);
  static article = 
    (id: string, content: JSX.Element | string) => link(`/article/${id}`, content);
  static tag = 
    (id: string, content: JSX.Element | string) => link(`/article/${id}`, content);
}