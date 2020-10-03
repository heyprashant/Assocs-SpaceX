import React from 'react';
import Adpapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import LaunchYears from './LaunchYears/LaunchYears';
import SuccessLaunch  from './SuccessLaunch/SucessLaunch';
import SuccessLanding from './SuccessLanding/SucessLanding';

configure ({ adpapter : new Adpapter()});

describe( "<Filters/>", ()=>{
    it("should render exactly one <LaunchYears/> element", () =>{
        const wrap = shallow(<LaunchYears/>);
        expect( wrap.find(LaunchYears)).toHaveLength(1);
    });
    
    it("should render exactly one <SuccessLaunch/> element", () =>{
        const wrap = shallow(<SuccessLaunch/>);
        expect( wrap.find(SuccessLaunch)).toHaveLength(1);
    });

    it("should render exactly one <SuccessLanding/> element", () =>{
        const wrap = shallow(<SuccessLanding/>);
        expect( wrap.find(SuccessLanding)).toHaveLength(1);
    });

});
