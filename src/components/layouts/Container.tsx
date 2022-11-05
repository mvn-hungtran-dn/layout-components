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
        responsive: {
          tablet: {
            maxWidth: '700px'
          },
          desktop: {
            maxWidth: '900px'
          }
        }
      }}
    >
      {props.children}
    </Box>
  )
}
