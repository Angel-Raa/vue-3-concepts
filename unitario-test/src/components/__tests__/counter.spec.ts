import { describe, it } from 'node:test'
import ICounter from '../ICounter.vue'
import { mount } from '@vue/test-utils'

describe('My test counter ', () => {
  it('The component render the initial state', () => {
    const wrapper = mount(ICounter)
    if(expect( wrapper.find('h3').exists())){
        expect(wrapper.text()).toBe('Counter : 0')
    }
    

  })
  it('The increment btn add ones to counter', () => {
    //  TODO
  })
})
