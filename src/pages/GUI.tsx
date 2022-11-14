import { Bleed } from "../components/layouts/Bleed"
import { Column } from "../components/layouts/Column"
import { Columns } from "../components/layouts/Columns"
import { Container } from "../components/layouts/Container"
import { Inline } from "../components/layouts/Inline"
import { Placeholder } from "../components/layouts/Placeholder"
import { Stack } from "../components/layouts/Stack"
import { Tiles } from "../components/layouts/Tiles"

export function GUI () {
  return (
    <Container>
      <p>Inline</p>
      <Inline space={{
        mobile: "small",
        tablet: 'medium',
        desktop: 'large',
        wide: 'xlarge'
      }}>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
        <Placeholder width="50px" height="50px"></Placeholder>
      </Inline>
      <p>Stack</p>
      <Stack space={{
        mobile: "small",
        tablet: 'medium',
        desktop: 'large',
        wide: 'xlarge'
      }}>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
      </Stack>
      <p>Tiles</p>
      <Tiles
        space={{
          mobile: 'small',
          wide: 'medium',
          desktop: 'large',
          tablet: 'xlarge'
        }}
        columns={{
          mobile: 1,
          wide: 4,
          desktop: 3,
          tablet: 2
        }}
      >
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
      </Tiles>
      <p>Bleed</p>
      <Bleed
        component="div"
        horizontal={{
          mobile: 'small',
          wide: 'medium',
          desktop: 'large',
          tablet: 'xlarge'
        }}
      >
        <Placeholder height="50px"></Placeholder>
      </Bleed>
      <p>Columns</p>
      <Columns space={{
         mobile: 'small',
         wide: 'medium',
         desktop: 'large',
         tablet: 'xlarge'
      }}>
        <Column width={{
          mobile: 1/2,
          wide: 1/2,
          desktop: 1/3,
          tablet: 1/4
        }}>
          <Placeholder height="50px"></Placeholder>
        </Column>
        <Column>
          <Placeholder height="50px"></Placeholder>
        </Column>
        <Column>
          <Placeholder height="50px"></Placeholder>
        </Column>
      </Columns>
    </Container>
  )
}
