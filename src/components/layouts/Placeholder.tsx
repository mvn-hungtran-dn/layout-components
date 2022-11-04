import { Box } from "./Box";

interface IPlaceholder {
  width?: string,
  height?: string
}

export function Placeholder (props: IPlaceholder) {
  return (
    <Box
      styles={{
        background: 'gray',
        height: props.height,
        width: props.width
      }}
    ></Box>
  )
}
