import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render <Layout/> element', () =>{
      const wrap = mount(<IndexPage data/>)
      expect(wrap.find('Layout').toHaveLength(1));
    })
  })  
})