import { Children } from "react";
import { Columns, ColumnsResponsive, Space, SpaceResponsive } from "../../functions/style.type";
import {
  beforePseudo,
  isSpace,
  negativeSpace,
  resolveSpaceResponsive,
  resolveWidthResponsive,
  toMedia
} from "../../functions/styles";
import { Box } from "./Box";

interface ITiles {
  children: React.ReactNode,
  space?: Space | SpaceResponsive,
  columns?: Columns | ColumnsResponsive,
}
export function Tiles ({children, ...props}: ITiles) {
  const { columns, space } = props

  return (
    <Box
      styles={{
        marginBottom: negativeSpace(space as Space),
        ...toMedia({
          mobile: beforePseudo({
            marginBottom: negativeSpace(
              resolveSpaceResponsive(space as SpaceResponsive).mobile
            )
          }),
          tablet: beforePseudo({
            marginBottom: negativeSpace(
              resolveSpaceResponsive(space as SpaceResponsive).tablet
            )
          }),
          desktop: beforePseudo({
            marginBottom: negativeSpace(
              resolveSpaceResponsive(space as SpaceResponsive).desktop
            )
          }),
          wide: beforePseudo({
            marginBottom: negativeSpace(
              resolveSpaceResponsive(space as SpaceResponsive).wide
            )
          })
        })
      }}
    >
      <Box
        styles={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: negativeSpace(space as Space),
          ...toMedia({
            mobile: {
              marginLeft: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).mobile)
            },
            tablet: {
              marginLeft: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).tablet)
            },
            desktop: {
              marginLeft: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).desktop)
            },
            wide: {
              marginLeft: negativeSpace(resolveSpaceResponsive(space as SpaceResponsive).wide)
            }
          })
        }}
      >
        {Children.map(children, (child: any) => (
          <Box
            styles={{
              paddingLeft: isSpace(space as Space) ? space : "none",
              paddingTop: isSpace(space as Space) ? space : "none",
              ...toMedia({
                mobile: {
                  paddingTop: resolveSpaceResponsive(space as SpaceResponsive).mobile,
                  paddingLeft: resolveSpaceResponsive(space as SpaceResponsive).mobile,
                  width: resolveWidthResponsive(columns as ColumnsResponsive).mobile
                },
                tablet: {
                  paddingTop: resolveSpaceResponsive(space as SpaceResponsive).tablet,
                  paddingLeft: resolveSpaceResponsive(space as SpaceResponsive).tablet,
                  width: resolveWidthResponsive(columns as ColumnsResponsive).tablet
                },
                desktop: {
                  paddingTop: resolveSpaceResponsive(space as SpaceResponsive).desktop,
                  paddingLeft: resolveSpaceResponsive(space as SpaceResponsive).desktop,
                  width: resolveWidthResponsive(columns as ColumnsResponsive).desktop
                },
                wide: {
                  paddingTop: resolveSpaceResponsive(space as SpaceResponsive).wide,
                  paddingLeft: resolveSpaceResponsive(space as SpaceResponsive).wide,
                  width: resolveWidthResponsive(columns as ColumnsResponsive).wide
                }
              }),
              width: typeof columns === 'number' ? `${100 / (columns as Columns || 1)}%` : ''
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
