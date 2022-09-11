import {expect, test} from '@jest/globals'

import {joinPath} from '../src/join-path'

test('join array of strings', () => {
  const joined = joinPath(['a', 'b', 'c'])
  expect(joined).toBe('a/b/c')
})

test('returns plain strings', () => {
  const joined = joinPath('plain')
  expect(joined).toBe('plain')
})
