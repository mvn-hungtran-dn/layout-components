import { Children } from "react";
import { Space } from "../../functions/style.type";
import { negativeSpace } from "../../functions/styles";
import { Box } from "./Box";

interface ITiles {
  children: React.ReactNode,
  space?: Space,
  spaceLeft?: Space,
  spaceTop?: Space,
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Tiles ({children, ...props}: ITiles) {
  const width = `${100 / (props.columns || 1)}%`

  return (
    <Box
      styles={{
        "&:before": {
          content: '""',
          display: "table",
          marginBottom: negativeSpace(props.space || "small"),
        }
      }}
    >
      <Box
        styles={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: negativeSpace(props.space || "small")
        }}
      >
        {Children.map(children, (child: any) => (
          <Box
            styles={{
              paddingLeft: props.space || props.spaceLeft || "small",
              paddingTop: props.space || props.spaceTop || "small",
              width
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
