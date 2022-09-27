import React from 'react';
import AboutReact from './AboutReact';
import Component from './Component';
import State from './State';
import Jsx from './Jsx';
import Prerequisites from './Prerequisites';
import VirtualDom from './VirtualDom';
import EventHandling from './EventHandling';
import Rendering from './Rendering';

const Class = () => {
    return (
        <div>
            <AboutReact></AboutReact>
            <VirtualDom></VirtualDom>
            <Prerequisites></Prerequisites>
            <Jsx></Jsx>
            <Component></Component>
            <State></State>
            <EventHandling></EventHandling>
            <Rendering></Rendering>
        </div>
    );
};

export default Class;