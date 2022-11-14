import { THEME } from '../theme'
import { Space, BreakPoint, ColumnsResponsive } from './style.type';

export function negativeSpace(space: Space | `${number}px` | ''): string {
  if (typeof space === 'object' || !space) {
    return ''
  }
  
  if (!isSpace(space as Space)) {
    const [, value, unit] = space.match(/(\d+)(.+)/)!
    return `${+value * -1}${unit}`
  }

  if (isSpace(space as Space)) {
    const spaceValue = THEME.space[space as Space]
    if (spaceValue === 'none') {
      return spaceValue
    }
    const [, value, unit] = THEME.space[space as Space].match(/(\d+)(.+)/)!
    return `${+value * -1}${unit}`
  }

  return ''
}

export function beforePseudo (rule: any) {
  return {
    '&:before': {
      content: '""',
      display: "table",
      ...rule
    }
  }
}

export function toMedia (rules: any) {
  const result: any = {}
  const mediaParam = 'min-width'

  Object.keys(THEME.breakPoint).forEach((key: string) => {
    result[
      `@media (${mediaParam}: ${THEME.breakPoint[key as BreakPoint]})`
    ] = rules && rules[key]
  })
  return result
}

export function isSpace (value: string): boolean {
  return ['none', 'small', 'medium', 'large', 'xlarge', 'xxlarge'].includes(value as Space)
}

export function resolveResponsive (rules: {[key: string]: Record<BreakPoint, Object>}) {
  const result: any = {}
  Object.keys({...rules}).map((key: string) => {
    result[key] = rules[key]
  })

  return {
    mobile: result['mobile'],
    tablet: result['tablet'],
    desktop: result['desktop'],
    wide: result['wide']
  }
}

export function resolveSpaceResponsive (
  rules: Record<BreakPoint, Space>
): Record<BreakPoint, `${number}px` | ''> {
  if (typeof rules !== 'object') {
    return {
      mobile: '',
      tablet: '',
      desktop: '',
      wide: ''
    }
  }
  return {
    mobile: THEME.space[rules['mobile']] as `${number}px`,
    tablet: THEME.space[rules['tablet']] as `${number}px`,
    desktop: THEME.space[rules['desktop']] as `${number}px`,
    wide: THEME.space[rules['wide']] as `${number}px`
  }
}

export function resolveWidthResponsive (columns: ColumnsResponsive) {
  return {
    mobile: `${100 / ((columns as ColumnsResponsive)['mobile'] || 1)}%`,
    tablet: `${100 / ((columns as ColumnsResponsive)['tablet'] || 1)}%`,
    desktop: `${100 / ((columns as ColumnsResponsive)['desktop'] || 1)}%`,
    wide: `${100 / ((columns as ColumnsResponsive)['wide'] || 1)}%`,
  }
}
