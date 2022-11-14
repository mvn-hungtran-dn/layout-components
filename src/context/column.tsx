import { createContext } from "react";

export const ColumnsContext = createContext<{
  marginLeft: string;
  marginLeftResponsive: any,
  width: string;
}>({
  marginLeft: 'small',
  marginLeftResponsive: {},
  width: 'auto',
})
