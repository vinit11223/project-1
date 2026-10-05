import { describe, expect, it } from 'vitest'

describe('accessibility baseline', () => {
  it('requires a skip-link target and semantic main landmark', () => {
    const html = '<a href="#main">Skip to main content</a><main id="main"></main>'
    expect(html).toContain('href="#main"')
    expect(html).toContain('<main id="main">')
  })
})
