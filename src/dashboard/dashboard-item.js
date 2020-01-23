import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import render from 'react-dom';
export default class DashboardItem extends Component {


    constructor(props) {
        super();
        this.state = {
            dataList: props.dataList,
            columnData: props.columnData
        };

    }

    componentWillReceiveProps(property){
        this.setState(...this.state,property);
    }

    render() {
        return (
            <React.Fragment>
               <ListGroup horizontal>
                {this.state.columnData.map(column => {
                    return column['show'] ? <ListGroupItem as="li" className="list-width">{column['displayName']}</ListGroupItem> : '';
                })}
               </ListGroup>
                {this.state.dataList.map(data => {
                    return (
                        <React.Fragment>
                           <ListGroup horizontal>
                                {this.state.columnData.map(column => {
                                    return (column['show'] ? <ListGroupItem as="li" className="list-width">{data[column['key']]}</ListGroupItem> : '');
                                })}
                           </ListGroup>
                        </React.Fragment>
                    )
                })}
               
            </React.Fragment>
        );
    }
}