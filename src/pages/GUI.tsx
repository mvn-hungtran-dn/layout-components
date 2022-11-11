import { Bleed } from "../components/layouts/Bleed"
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
    </Container>
  )
}
