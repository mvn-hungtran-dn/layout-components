import { AllHTMLAttributes, createElement, KeyboardEventHandler, MouseEventHandler } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { THEME } from "../../theme"
import { BreakPoint, Space } from "../../functions/style.type";

export interface IBox extends AllHTMLAttributes<HTMLElement> {
  children?: React.ReactNode,
  component?: string,
  class?: string,
  styles?: StylesType,
  events?: {
    onClick?: MouseEventHandler,
    onBlur?: MouseEventHandler,
    onKeyUp?: KeyboardEventHandler
  }
}

function toMedia ({responsive}: StylesType) {
  const result: any = {}
  const mediaParam = THEME.responsiveDirection === 'desktop-first' ? 'max-width' : 'min-width'
  
  Object.keys(THEME.breakPoint).forEach((key: string) => {
    result[
      `@media (${mediaParam}: ${THEME.breakPoint[key as BreakPoint]})`
    ] = responsive && responsive[key]
  })
  return result
}

type StylesType = {
  padding?: Space | string,
  paddingTop?: Space | string,
  paddingLeft?: Space | string,
  paddingRight?: Space | string,
  paddingBottom?: Space | string,
  paddingBlock?: Space | string,
  paddingInline?: Space | string,
  margin?: Space | string,
  marginTop?: Space | string,
  marginLeft?: Space | string,
  marginRight?: Space | string,
  marginBottom?: Space | string,
  marginBlock?: Space | string,
  marginInline?: Space | string,
  responsive?: {
    [key: string]: {
      [key: string]: any
    }
  },
  [key: string]: any
}

export function Box ({ children, ...props }: IBox) {
  const useStyles = createUseStyles((theme: typeof THEME) => ({
    boxStyle: (styles: StylesType) => ({
      ...styles,
      padding: theme.space[styles.padding as Space] || styles.padding,
      paddingTop: theme.space[styles.paddingTop as Space] || styles.paddingTop,
      paddingLeft: theme.space[styles.paddingLeft as Space] || styles.paddingLeft,
      paddingRight: theme.space[styles.paddingRight as Space] || styles.paddingRight,
      paddingBottom: theme.space[styles.paddingBottom as Space] || styles.paddingBottom,
      paddingBlock: theme.space[styles.paddingBlock as Space] || styles.paddingBlock,
      paddingInline: theme.space[styles.paddingInline as Space] || styles.paddingInline,
      margin: theme.space[styles.margin as Space] || styles.margin,
      marginTop: theme.space[styles.marginTop as Space] || styles.marginTop,
      marginLeft: theme.space[styles.marginLeft as Space] || styles.marginLeft,
      marginRight: theme.space[styles.marginRight as Space] || styles.marginRight,
      marginBottom: theme.space[styles.marginBottom as Space] || styles.marginBottom,
      marginBlock: theme.space[styles.marginBlock as Space] || styles.marginBlock,
      marginInline: theme.space[styles.marginInline as Space] || styles.marginInline,
      ...toMedia(styles)
    })
  }))
  const classes = useStyles(props.styles || {})

  return createElement(
    props.component || 'div',
    {
      className: clsx(classes.boxStyle, props.class),
      ...props.events
    },
    children
  )
}
