import { THEME } from "../theme";

export type Space = keyof typeof THEME.space 
export type BreakPoint = keyof typeof THEME.breakPoint
export type Columns = 1 | 2 | 3 | 4 | 5 | 6
export type SpaceResponsive = Record<BreakPoint, Space>
export type ColumnsResponsive = Record<BreakPoint, Columns>
