import { Children } from "react";
import { negativeSpace } from "../../functions/styles";
import { THEME } from "../../theme";
import { Box } from "./Box";

interface IInline {
  children?: React.ReactNode,
  space: keyof typeof THEME.space,
  reverse?: boolean,
  alignY?: 'center' | 'top' | 'bottom',
  align?: 'left' | 'center' | 'right'
}

export function Inline ({children, ...props}: IInline) {
  return (
    <Box styles={{
      "&:before": {
        content: '""',
        display: "table",
        marginBottom: negativeSpace(props.space || 'small')
      }
    }}>
      <Box
        styles={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: negativeSpace(props.space || 'small'),
          flexDirection: props.reverse ? "row-reverse" : "",
          alignItems: props.alignY || '',
          justifyContent: props.align || ''
        }}
      >
        {Children.map(children, (child: any) => (
          <Box
            styles={{
              marginLeft: props.space,
              marginTop: props.space,
              width: "auto",
              minWidth: "0"
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
