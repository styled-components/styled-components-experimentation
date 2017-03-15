import wreck from './train-wreck'

export const breakpoints = {
  retina: (...args) => css`
    @media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dppx) {
      ${ css(...args) }
    }
  `,
  nonretina: (...args) => css`
    @media (-webkit-max-device-pixel-ratio: 1.249), (max-resolution: 119dppx) {
      ${ css(...args) }
    }
  `,
  phone: (...args) => css`@media (max-width: 414px) { ${ css(...args) } }`,
  handheld: (...args) => css`@media (max-width: 600px) { ${ css(...args) } }`,
}

export const typography = wreck({
  h1: `font-size: 1.75rem;
    ${breakpoints.phone`
      font-size: 1.5rem;
    `}
  `,
  h2: `font-size: 1.5rem;
    ${breakpoints.phone`
      font-size: 1.25rem;
    `}
  `,
  h3: `font-size: 1.25rem;
    ${breakpoints.phone`
      font-size: 1.125rem;
    `}
  `,
  p: `font-size: 1rem;`,
  small: `font-size: 0.9rem`,
  light: `
    font-weight: 400;
    ${breakpoints.retina`
      -webkit-font-smoothing: antialiased;
    `}
  `,
  normal: `font-weight: 500;`,
  bold: `
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
  `,
  center: `text-align: center;`,
  right: `text-align: right;`,
  left: `text-align: left`,
  noDecoration: `text-decoration: none;`,
  underline: `text-decoration: underline;`,
  underlineOnHover: `&:hover { text-decoration: underline; }`,
  lh14: `line-height: 1.4;`,
  nowrap: `white-space: nowrap;`,
  uppercase: `text-transform: uppercase;`,
  inherit: `font-family: inherit;`
})

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
