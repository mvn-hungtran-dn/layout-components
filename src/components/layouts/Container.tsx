import { THEME } from "../../theme";
import { Box } from "./Box";

interface IContainer {
  children?: React.ReactNode
}

export function Container (props: IContainer) {
  return (
    <Box
      styles={{
        paddingInline: 'medium',
        marginBlock: '0',
        marginInline: 'auto',
        responsive: THEME.responsiveContainer
      }}
    >
      {props.children}
    </Box>
  )
}
