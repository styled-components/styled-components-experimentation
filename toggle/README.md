# Toggle

I've quite often wanted to define a sort of "style namespace", so you can do this sort of thing

```js
import { flex, typography } from '../shared/styles.js'

styled.div`
  ${ flex('vertical center-both') }
  ${ typography('18pt semibold truncated') }
`
```

This file makes it easy to define them:

```js
/* styles.js */
export const flex = toggle('flex', {
  default: 'display: flex;', // always included
  inline: 'display: inline-flex;',
  vertical: 'flex-direction: column;',
  center-both: 'align-items: center; justify-content: center;'
})
```
