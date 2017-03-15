Little experiment of a fluid interface (also known as a train-wreck) for composing styles.

## Defining wrecks

```js
import wreck from './train-wreck'

export const flex = wreck({
  default: `display: flex;`,
  inline: `display: inline-flex;`,
  vertical: `flex-direction: column;`,
  alignCenter: `align-items: center;`,
  alignStart: `align-items: flex-start;`,
  alignEnd: `align-items: flex-end;`,
  center: `justify-content: center;`,
  centerBoth: `justify-content: center; align-items: center;`,
  start: `justify-content: flex-start;`,
  end: `justify-content: flex-end;`,
  wrap: `flex-wrap: wrap;`
})
```

## Using wrecks

```js
import styled from 'styled-components'
import { flex } from './wrecks'

const Box = styled.div`
  ${ flex.vertical.alignCenter.start }
`
```

---

Rekt. By [@glenmaddern](https://glenmaddern.com)
