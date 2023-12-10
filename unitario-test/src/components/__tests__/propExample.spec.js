import { describe, it } from 'node:test'
import { expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import PropExample from '../PropExample.vue'
describe('Test propExample', () => {
  it('the componenten render and show title and content props', () => {
    const wrapper = mount(PropExample, {
      props: {
        title: 'Hello World!',
        content: 'Lorem ipsum'
      }
    })
    if (expect(wrapper.find('h3').exists())) {
      expect(wrapper.find('h3').text()).toBe('Hello World!')
    }
    if (expect(wrapper.find('p').exists())) {
      expect(wrapper.find('p').text()).toBe('Lorem ipsum')
    }
  })
})
