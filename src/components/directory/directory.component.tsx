import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'face',
    imageUrl: 'https://tinyurl.com/4b55j3f2',
    route: 'shop/face',
  },
  {
    id: 2,
    title: 'body',
    imageUrl: 'https://tinyurl.com/2mjf6h8j',
    route: 'shop/body',
  },
  {
    id: 3,
    title: 'cleanse',
    imageUrl: 'https://tinyurl.com/2mjf6h8j',
    route: 'shop/cleanse',
  },
  {
    id: 4,
    title: 'hair',
    imageUrl: 'https://tinyurl.com/vznp2rs4',
    route: 'shop/hair',
  },
  {
    id: 5,
    title: 'hands',
    imageUrl: 'https://tinyurl.com/4b55j3f2',
    route: 'shop/hands',
  },
  {
    id: 6,
    title: 'massage',
    imageUrl: 'https://tinyurl.com/ywzrcyff',
    route: 'shop/massage',
  },
  {
    id: 7,
    title: 'scents',
    imageUrl: 'https://tinyurl.com/vznp2rs4',
    route: 'shop/scents',
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;