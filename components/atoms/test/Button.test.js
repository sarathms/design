/* global describe, test, expect */
import React from 'react'
import toJson from 'enzyme-to-json'
import '../../../test/config'
import { renderJSON, shallowWithTheme } from '../../../test'

import { Button } from '../'

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(
      <Button />
    )
    expect(json).toMatchSnapshot()
  })
  test('render with width prop', () => {
    const json = toJson(shallowWithTheme(
      <Button width={1} />
    ))
    expect(json).toMatchSnapshot()
    // XXX for some reason only a shallow render makes this assertion true
    expect(json).toHaveStyleRule('width', '100%')
  })
})
