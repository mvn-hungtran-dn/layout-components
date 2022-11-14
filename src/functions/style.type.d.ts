import { THEME } from "../theme";

type Space = keyof typeof THEME.space 
type BreakPoint = keyof typeof THEME.breakPoint
type Columns = 1 | 2 | 3 | 4 | 5 | 6
type SpaceResponsive = Record<BreakPoint, Space>
type ColumnsResponsive = Record<BreakPoint, Columns>
