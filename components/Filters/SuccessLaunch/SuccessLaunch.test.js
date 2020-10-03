import React from 'react';
import Adpapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Button from "../../UI/Button/Button";


configure ({ adpapter : new Adpapter()});

describe( "<SuccessLaunch/>", ()=>{
    it("should render exactly two <Button /> element", () =>{
        const wrap = shallow(<Button/>);
        expect( wrap.find(Button)).toHaveLength(2);
    });

});
