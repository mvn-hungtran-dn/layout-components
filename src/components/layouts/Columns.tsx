import { Children } from "react";
import { ColumnsContext } from "../../context/column";
import { Space, SpaceResponsive } from "../../functions/style.type";
import { isSpace, negativeSpace, resolveSpaceResponsive, toMedia } from "../../functions/styles";
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
      ...toMedia({
        mobile: {
          marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).mobile)
        },
        tablet: {
          marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).tablet)
        },
        desktop: {
          marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).desktop)
        },
        wide: {
          marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).wide)
        }
      })
    }}>
      {Children.map(props.children, (child) => (
        <ColumnsContext.Provider
          value={{
            width: "auto",
            marginLeft: isSpace(props.space as Space) ? props.space as Space : '',
            marginLeftResponsive: {
              mobile: resolveSpaceResponsive(props.space as SpaceResponsive).mobile,
              tablet: resolveSpaceResponsive(props.space as SpaceResponsive).tablet,
              desktop: resolveSpaceResponsive(props.space as SpaceResponsive).desktop,
              wide: resolveSpaceResponsive(props.space as SpaceResponsive).wide
            }
          }}
        >
          {child}
        </ColumnsContext.Provider>
      ))}
    </Box>
  )
}
