import { strict as assert } from 'assert'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../src/views/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    assert.ok(wrapper.text().includes(msg))
  })
})
