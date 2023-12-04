import { describe, it } from 'node:test'
import ICounter from '../ICounter.vue'
import { mount } from '@vue/test-utils'
import { expect } from '@jest/globals'

describe('My test counter ', () => {
  it('The component render the initial state', () => {
    const wrapper = mount(ICounter)
    if (expect(wrapper.find('h3').exists())) {
      expect(wrapper.text()).toBe(' 0')
    }
  })
})
