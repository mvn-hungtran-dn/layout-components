import { THEME } from './../theme';

export function negativeSpace(space: keyof typeof THEME.space): string {
  const spaceValue = THEME.space[space]
  if (spaceValue === 'none') {
    return spaceValue;
  }
  const [, value, unit] = THEME.space[space].match(/(\d+)(.+)/)!
  return `${+value * -1}${unit}`
}
