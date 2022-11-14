import { createContext } from "react";

export const ColumnsContext = createContext<{
  marginLeft: string;
  width: string;
}>({
  marginLeft: 'small',
  width: "100%",
})
