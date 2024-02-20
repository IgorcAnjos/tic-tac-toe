import { ReactNode } from "react";

export interface IRouteInfo {
  pathName: string;
  description: string;
  element: ReactNode;
}