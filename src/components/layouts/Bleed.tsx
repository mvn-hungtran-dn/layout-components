import { Space, SpaceResponsive } from "../../functions/style.type";
import { negativeSpace, resolveSpaceResponsive, toMedia } from "../../functions/styles";
import { Box } from "./Box";

interface IBleed {
  children?: React.ReactNode,
  space?: Space | SpaceResponsive,
  vertical?: Space | SpaceResponsive,
  horizontal?: Space | SpaceResponsive,
  top?: Space | SpaceResponsive,
  bottom?: Space | SpaceResponsive,
  left?: Space | SpaceResponsive,
  right?: Space | SpaceResponsive,
  component: 'span' | 'div'
}

export function Bleed (props: IBleed) {
  return (
    <Box
      component={props.component}
      styles={{
        margin: negativeSpace(props.space as Space),
        marginBlock: negativeSpace(props.vertical as Space),
        marginInline: negativeSpace(props.horizontal as Space),
        marginTop: negativeSpace(props.top as Space),
        marginLeft: negativeSpace(props.left as Space),
        marginRight: negativeSpace(props.right as Space),
        marginBottom: negativeSpace(props.bottom as Space),
        ...toMedia({
          mobile: {
            margin: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).mobile),
            marginBlock: negativeSpace(resolveSpaceResponsive(props.vertical as SpaceResponsive).mobile),
            marginInline: negativeSpace(resolveSpaceResponsive(props.horizontal as SpaceResponsive).mobile),
            marginTop: negativeSpace(resolveSpaceResponsive(props.top as SpaceResponsive).mobile),
            marginLeft: negativeSpace(resolveSpaceResponsive(props.left as SpaceResponsive).mobile),
            marginRight: negativeSpace(resolveSpaceResponsive(props.right as SpaceResponsive).mobile),
            marginBottom: negativeSpace(resolveSpaceResponsive(props.bottom as SpaceResponsive).mobile)
          },
          tablet: {
            margin: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).tablet),
            marginBlock: negativeSpace(resolveSpaceResponsive(props.vertical as SpaceResponsive).tablet),
            marginInline: negativeSpace(resolveSpaceResponsive(props.horizontal as SpaceResponsive).tablet),
            marginTop: negativeSpace(resolveSpaceResponsive(props.top as SpaceResponsive).tablet),
            marginLeft: negativeSpace(resolveSpaceResponsive(props.left as SpaceResponsive).tablet),
            marginRight: negativeSpace(resolveSpaceResponsive(props.right as SpaceResponsive).tablet),
            marginBottom: negativeSpace(resolveSpaceResponsive(props.bottom as SpaceResponsive).tablet)
          },
          desktop: {
            margin: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).desktop),
            marginBlock: negativeSpace(resolveSpaceResponsive(props.vertical as SpaceResponsive).desktop),
            marginInline: negativeSpace(resolveSpaceResponsive(props.horizontal as SpaceResponsive).desktop),
            marginTop: negativeSpace(resolveSpaceResponsive(props.top as SpaceResponsive).desktop),
            marginLeft: negativeSpace(resolveSpaceResponsive(props.left as SpaceResponsive).desktop),
            marginRight: negativeSpace(resolveSpaceResponsive(props.right as SpaceResponsive).desktop),
            marginBottom: negativeSpace(resolveSpaceResponsive(props.bottom as SpaceResponsive).desktop)
          },
          wide: {
            margin: negativeSpace(resolveSpaceResponsive(props.space as SpaceResponsive).wide),
            marginBlock: negativeSpace(resolveSpaceResponsive(props.vertical as SpaceResponsive).wide),
            marginInline: negativeSpace(resolveSpaceResponsive(props.horizontal as SpaceResponsive).wide),
            marginTop: negativeSpace(resolveSpaceResponsive(props.top as SpaceResponsive).wide),
            marginLeft: negativeSpace(resolveSpaceResponsive(props.left as SpaceResponsive).wide),
            marginRight: negativeSpace(resolveSpaceResponsive(props.right as SpaceResponsive).wide),
            marginBottom: negativeSpace(resolveSpaceResponsive(props.bottom as SpaceResponsive).wide)
          }
        })
      }}
    >
      {props.children}
    </Box>
  )
}
