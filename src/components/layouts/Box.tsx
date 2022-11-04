import { AllHTMLAttributes, createElement, KeyboardEventHandler, MouseEventHandler } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { THEME } from "../../theme"

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

type StylesType = {
  padding?: keyof typeof THEME.space | string,
  paddingTop?: keyof typeof THEME.space | string,
  paddingLeft?: keyof typeof THEME.space | string,
  paddingRight?: keyof typeof THEME.space | string,
  paddingBottom?: keyof typeof THEME.space | string,
  paddingBlock?: keyof typeof THEME.space | string,
  paddingInline?: keyof typeof THEME.space | string,
  margin?: keyof typeof THEME.space | string,
  marginTop?: keyof typeof THEME.space | string,
  marginLeft?: keyof typeof THEME.space | string,
  marginRight?: keyof typeof THEME.space | string,
  marginBottom?: keyof typeof THEME.space | string,
  marginBlock?: keyof typeof THEME.space | string,
  marginInline?: keyof typeof THEME.space | string,
  [key: string]: any
}

export function Box ({ children, ...props }: IBox) {
  const useStyles = createUseStyles((theme: typeof THEME) => ({
    boxStyle: (styles: StylesType) => ({
      ...styles,
      padding: theme.space[styles.padding as keyof typeof THEME.space] || styles.padding,
      paddingTop: theme.space[styles.paddingTop as keyof typeof THEME.space] || styles.paddingTop,
      paddingLeft: theme.space[styles.paddingLeft as keyof typeof THEME.space] || styles.paddingLeft,
      paddingRight: theme.space[styles.paddingRight as keyof typeof THEME.space] || styles.paddingRight,
      paddingBottom: theme.space[styles.paddingBottom as keyof typeof THEME.space] || styles.paddingBottom,
      paddingBlock: theme.space[styles.paddingBlock as keyof typeof THEME.space] || styles.paddingBlock,
      paddingInline: theme.space[styles.paddingInline as keyof typeof THEME.space] || styles.paddingInline,
      margin: theme.space[styles.margin as keyof typeof THEME.space] || styles.margin,
      marginTop: theme.space[styles.marginTop as keyof typeof THEME.space] || styles.marginTop,
      marginLeft: theme.space[styles.marginLeft as keyof typeof THEME.space] || styles.marginLeft,
      marginRight: theme.space[styles.marginRight as keyof typeof THEME.space] || styles.marginRight,
      marginBottom: theme.space[styles.marginBottom as keyof typeof THEME.space] || styles.marginBottom,
      marginBlock: theme.space[styles.marginBlock as keyof typeof THEME.space] || styles.marginBlock,
      marginInline: theme.space[styles.marginInline as keyof typeof THEME.space] || styles.marginInline,
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
