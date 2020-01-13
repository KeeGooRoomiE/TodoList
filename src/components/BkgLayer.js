import React from 'react';

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