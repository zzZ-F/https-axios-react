import Https from 'https-axios-service'
import React from 'react';
import {Spin} from 'antd';
import ReactDOM from "react-dom";
import "./styles/loading.css"

function showLoading() {
    let dom = document.createElement('div');
    dom.setAttribute('id', 'http-loading');
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip="" size='large'/>, dom)
}

function removeLoading() {
    document.body.removeChild(document.getElementById('http-loading'))
}


class ReactAxiosHttps extends Https {
    constructor(props) {
        super(props);
        this.showLoading = props.showLoading || showLoading;
        this.removeLoading = props.removeLoading || removeLoading;
    }
}

export default ReactAxiosHttps