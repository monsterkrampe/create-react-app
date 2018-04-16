import React from 'react';
import { range } from 'lodash';

const ScrollRestoration: React.SFC = () => {
    return <div>
        {range(0, 1000).map((i) => {
            return <div key={i}>{i}<br/><br/></div>;
        })}
    </div>;
};

export default ScrollRestoration;