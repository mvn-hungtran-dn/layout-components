import { Children } from "react";
import { Space, SpaceResponsive } from "../../functions/style.type";
import { isSpace, negativeSpace, resolveSpaceResponsive, toMedia } from "../../functions/styles";
import { Box } from "./Box";

interface IStack {
  children?: React.ReactNode,
  space: Space | SpaceResponsive,
  reverse?: boolean
}

export function Stack ({children, ...props}: IStack) {
  const { space } = props

  return (
    <Box
      styles={{
        display: "flex",
        flexDirection: "column",
        marginTop: negativeSpace(space as Space),
        ...toMedia({
          mobile: {
            marginTop: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).mobile)
          },
          tablet: {
            marginTop: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).tablet)
          },
          desktop: {
            marginTop: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).desktop)
          },
          wide: {
            marginTop: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).wide)
          }
        })
      }}
    >
      {Children.map(children, (child: any) => (
        <Box
          styles={{
            marginTop: isSpace(space as Space) ? space : "none",
            width: "100%",
            minWidth: "0",
            ...toMedia({
              mobile: {
                marginTop: resolveSpaceResponsive(space as SpaceResponsive).mobile
              },
              tablet: {
                marginTop: resolveSpaceResponsive(space as SpaceResponsive).tablet
              },
              desktop: {
                marginTop: resolveSpaceResponsive(space as SpaceResponsive).desktop
              },
              wide: {
                marginTop: resolveSpaceResponsive(space as SpaceResponsive).wide
              }
            })
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}
