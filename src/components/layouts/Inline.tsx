import { Children } from "react";
import { Space, SpaceResponsive } from "../../functions/style.type";
import { beforePseudo, isSpace, negativeSpace, resolveSpaceResponsive, toMedia } from "../../functions/styles";
import { Box } from "./Box";

interface IInline {
  children?: React.ReactNode,
  space: Space | SpaceResponsive,
  reverse?: boolean,
  alignY?: 'center' | 'top' | 'bottom',
  align?: 'left' | 'center' | 'right'
}

export function Inline ({children, ...props}: IInline) {
  return (
    <Box styles={
      beforePseudo({
          marginBottom: negativeSpace(props.space as Space),
        ...toMedia({
          mobile: {
            marginBottom: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).mobile)
          },
          tablet: {
            marginBottom: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).tablet)
          },
          desktop: {
            marginBottom: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).desktop)
          },
          wide: {
            marginBottom: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).wide)
          }
        })
      })
    }>
      <Box
        styles={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: negativeSpace(props.space as Space),
          flexDirection: props.reverse ? "row-reverse" : "",
          alignItems: props.alignY || '',
          justifyContent: props.align || '',
          ...toMedia({
            mobile: {
              marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).mobile)
            },
            tablet: {
              marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).tablet)
            },
            desktop: {
              marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).desktop)
            },
            wide: {
              marginLeft: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).wide)
            }
          })
        }}
      >
        {Children.map(children, (child: any) => (
          <Box
            styles={{
              marginLeft: isSpace(props.space as string) ? props.space : '',
              marginTop: isSpace(props.space as string) ? props.space : '',
              width: "auto",
              minWidth: "0",
              ...toMedia({
                mobile: {
                  marginLeft: resolveSpaceResponsive(props.space as SpaceResponsive).mobile,
                  marginTop: resolveSpaceResponsive(props.space as SpaceResponsive).mobile
                },
                tablet: {
                  marginLeft: resolveSpaceResponsive(props.space as SpaceResponsive).tablet,
                  marginTop: resolveSpaceResponsive(props.space as SpaceResponsive).tablet
                },
                desktop: {
                  marginLeft: resolveSpaceResponsive(props.space as SpaceResponsive).desktop,
                  marginTop: resolveSpaceResponsive(props.space as SpaceResponsive).desktop
                },
                wide: {
                  marginLeft: resolveSpaceResponsive(props.space as SpaceResponsive).wide,
                  marginTop: resolveSpaceResponsive(props.space as SpaceResponsive).wide
                }
              })
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
