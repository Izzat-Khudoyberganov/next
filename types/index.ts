import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type TodoDataType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface navDataI {
  id: number;
  text: string;
  href: '/about' | '/contact' | '/';
}

export interface brandDataI extends Pick<TodoDataType, 'id' | 'title'> {
  description: string;
  icon: ReactNode;
}



export interface productDataI extends Pick<TodoDataType, 'id' | 'title'> {
  image: string;
  price: number;
  category: string;
}
