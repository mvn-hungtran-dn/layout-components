import { Children } from "react";
import { negativeSpace } from "../../functions/styles";
import { THEME } from "../../theme";
import { Box } from "./Box";

interface IStack {
  children?: React.ReactNode,
  space: keyof typeof THEME.space,
  reverse?: boolean
}

export function Stack ({children, ...props}: IStack) {
  return (
    <Box
      styles={{
        display: "flex",
        flexDirection: "column",
        marginTop: negativeSpace(props.space || "small")
      }}
    >
      {Children.map(children, (child: any) => (
        <Box
          styles={{
            marginTop: props.space,
            width: "100%",
            minWidth: "0"
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}
