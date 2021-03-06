/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxdropdownlist.js';
import '../jqwidgets/jqxcombobox.js';
import '../jqwidgets/jqxinput.js';
import '../jqwidgets/jqxtoolbar.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxToolBar extends React.Component {
    constructor(props) {
        super(props);
        const widgetId = 'jqxToolBar' + JQXLite.generateID();
        this.componentSelector = '#' + widgetId;
        this.state = { id: widgetId };
    };
    componentDidMount() {
        const options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        const properties = ['disabled','height','initTools','minimizeWidth','minWidth','maxWidth','rtl','tools','theme','width'];
        let options = {};
        for(let item in this.props) {
            if(item === 'settings') {
                for(let itemTwo in this.props[item]) {
                    options[itemTwo] = this.props[item][itemTwo];
                }
            } else {
                if(properties.indexOf(item) !== -1) {
                      options[item] = this.props[item];
                }
            }
        }
        return options;
    };
    createComponent(options) {
        if(!this.style) {
            for (let style in this.props.style) {
                JQXLite(this.componentSelector).css(style, this.props.style[style]);
            }
        }
        if(this.props.className !== undefined) {
            const classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
            JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxToolBar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxToolBar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxToolBar(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('height');
        }
    };
    initTools(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('initTools', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('initTools');
        }
    };
    minimizeWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('minimizeWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('minimizeWidth');
        }
    };
    minWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('minWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('minWidth');
        }
    };
    maxWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('maxWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('maxWidth');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('rtl');
        }
    };
    tools(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('tools', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('tools');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToolBar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToolBar('width');
        }
    };
    addTool(type, position, separator, menuToolIninitialization) {
        JQXLite(this.componentSelector).jqxToolBar('addTool', type, position, separator, menuToolIninitialization);  
    };
    disableTool(index, disable) {
        JQXLite(this.componentSelector).jqxToolBar('disableTool', index, disable);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxToolBar('destroy');  
    };
    destroyTool(index) {
        JQXLite(this.componentSelector).jqxToolBar('destroyTool', index);  
    };
    getTools() {
        return JQXLite(this.componentSelector).jqxToolBar('getTools');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxToolBar('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxToolBar('refresh');  
    };
    render() {
        return (
            <div id={this.state.id}>{this.props.value}{this.props.children}</div>
        )
    };
};

