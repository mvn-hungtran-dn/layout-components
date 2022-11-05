import { Inline } from "../components/layouts/Inline"
import { Placeholder } from "../components/layouts/Placeholder"
import { Stack } from "../components/layouts/Stack"
import { Tiles } from "../components/layouts/Tiles"

export function GUI () {
  return (
    <>
      <p>Inline</p>
      <Inline space="xxlarge">
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
      <Stack space="xxlarge">
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
      </Stack>
      <p>Tiles</p>
      <Tiles columns={3}>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
        <Placeholder height="50px"></Placeholder>
      </Tiles>
    </>
  )
}
