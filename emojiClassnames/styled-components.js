// @flow

/* Import singletons */
import css from 'styled-components/lib/constructors/css'
import injectGlobal from 'styled-components/lib/constructors/injectGlobal'

/* Import singleton constructors */
import _styledComponent from 'styled-components/lib/models/StyledComponent'
import _styled from 'styled-components/lib/constructors/styled'
import _keyframes from 'styled-components/lib/constructors/keyframes'
import _ComponentStyle from 'styled-components/lib/models/ComponentStyle'

/* Import components */
import ThemeProvider from 'styled-components/lib/models/ThemeProvider'

import toEmoji from './toEmoji'

/* Instantiate singletons */
const keyframes = _keyframes(toEmoji)
const styled = _styled(_styledComponent(_ComponentStyle(toEmoji)))

/* Export everything */
export default styled
export { css, keyframes, injectGlobal, ThemeProvider }
