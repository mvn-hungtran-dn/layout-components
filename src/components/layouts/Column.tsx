import { useContext } from "react";
import { ColumnsContext } from "../../context/column";
import { Space, SpaceResponsive } from "../../functions/style.type"
import { Box } from "./Box"

interface IColumn {
  children?: React.ReactNode,
  space?: Space | SpaceResponsive,
  align?: 'left' | 'right' | 'center',
  width?: 'content' | number,
  alignY?: 'top' | 'bottom' | 'center',
}

export function Column ({children, ...props}: IColumn) {
  const { marginLeft } = useContext(ColumnsContext)
  const flexPeroperty = props.width === 'content' ?  'auto' : props.width ? `${+props.width * 100}%` : 'unset'
  
  return (
    <Box
      styles={{
        flex: `0 0 ${flexPeroperty}`,
        width: "100%",
        alignItems: props.alignY,
        justifyContent: props.align,
        marginLeft
      }}
    >
      {children}
    </Box>
  )
}
