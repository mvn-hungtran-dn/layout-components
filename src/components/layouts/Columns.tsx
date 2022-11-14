import { Children } from "react";
import { ColumnsContext } from "../../context/column";
import { Space, SpaceResponsive } from "../../functions/style.type";
import { negativeSpace } from "../../functions/styles";
import { Box } from "./Box";

interface IColumns {
  children: React.ReactNode,
  space?: Space | SpaceResponsive,
  align?: 'left' | 'right' | 'center',
  alignY?:  'top' | 'bottom' | 'center',
}

export function Columns (props: IColumns) {
  return (
    <Box styles={{
      display: "flex",
      alignItems: props.alignY,
      marginLeft: negativeSpace(props.space as Space),
    }}>
      {Children.map(props.children, (child) => (
        <ColumnsContext.Provider
          value={{
            width: "100%",
            marginLeft: props.space as Space
          }}
        >
          {child}
        </ColumnsContext.Provider>
      ))}
    </Box>
  )
}
