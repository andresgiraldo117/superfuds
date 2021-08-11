import React, { Fragment } from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Sello extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    img
name
    render() {
        const renderTooltip = (props) => (
            <Tooltip className="tooltip-content" id="button-tooltip" {...props}>
                <div>
                    <div className="tooltip-title">Producto</div>
                    <div className="tooltip-description">{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</div>
                </div>
            </Tooltip>
        );

        return(
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 300 }}
                overlay={renderTooltip}
            >
                <div>
                    <img
                        src={this.props.img}
                        alt={'sello_'+ this.props.name}
                    />
                </div>
            </OverlayTrigger>
        );
    }
}

export default Sello;