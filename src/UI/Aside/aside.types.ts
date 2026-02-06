import type { ReactElement } from "react";

interface IAsideItem {
  title: string;
  to: string;
  icon?: string | ReactElement;
}

export interface IAsideProps {
  items: IAsideItem[];
}
