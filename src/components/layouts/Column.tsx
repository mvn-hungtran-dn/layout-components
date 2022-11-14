import { useContext } from "react";
import { ColumnsContext } from "../../context/column";
import { ColumnsResponsive, Space, SpaceResponsive } from "../../functions/style.type"
import { isSpace, resolveWidthResponsive, toMedia } from "../../functions/styles";
import { Box } from "./Box"

interface IColumn {
  children?: React.ReactNode,
  space?: Space | SpaceResponsive,
  align?: 'left' | 'right' | 'center',
  width?: 'content' | number | ColumnsResponsive,
  alignY?: 'top' | 'bottom' | 'center',
}

export function Column ({children, ...props}: IColumn) {
  const { marginLeft, marginLeftResponsive } = useContext(ColumnsContext)
  const flexPeroperty = props.width === 'content' ?  'auto' : props.width ? `${+props.width * 100}%` : '1'
  
  return (
    <Box
      styles={{
        flex: typeof props.width === 'object' ? '' : `0 0 ${flexPeroperty}`,
        width: "100%",
        alignItems: props.alignY,
        justifyContent: props.align,
        marginLeft: isSpace(marginLeft) ? marginLeft : '',
        ...toMedia({
          mobile: {
            flex: `0 0 ${resolveWidthResponsive(props.width as ColumnsResponsive).mobile}`,
            marginLeft: marginLeftResponsive.mobile || ''
          },
          tablet: {
            flex: `0 0 ${resolveWidthResponsive(props.width as ColumnsResponsive).tablet}`,
            marginLeft: marginLeftResponsive.tablet || ''
          },
          desktop: {
            flex: `0 0 ${resolveWidthResponsive(props.width as ColumnsResponsive).desktop}`,
            marginLeft: marginLeftResponsive.desktop || ''
          },
          wide: {
            flex: `0 0 ${resolveWidthResponsive(props.width as ColumnsResponsive).wide}`,
            marginLeft: marginLeftResponsive.wide || ''
          }
        })
      }}
    >
      {children}
    </Box>
  )
}
