// interfaces/index.ts
export interface CardProps {
  title: string;
  image: string;
  price: number;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}
