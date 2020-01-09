import React from 'react';

import Main from "../List/Main";
import UserField from '../Auth/UserField';
import PrivateRoute from "../PrivateRoute";
import AuthStore from '../Auth/AuthStore';
//
//
//
//
//

export default class Layer extends React.Component {
    render() {
        return (
            <div>
                <div className="layerColouredPanel" />
                <div className="app-layer" >
                    {this.props.children}
                </div>
            </div>
        )
    }

}