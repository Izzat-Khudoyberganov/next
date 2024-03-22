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