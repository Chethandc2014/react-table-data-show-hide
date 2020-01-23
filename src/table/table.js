import React, { Component } from 'react';
import render from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import DashboardItem from '../dashboard/dashboard-item'
export default class Table extends Component {

    constructor() {
        super();
        let dashboardData = [
            [{ displayName: "D1", 
               dataList: [{ id: 1, name: "Chethan" }, { id: 1, name: "Chethan" }],
               columnData:[{key:'id',displayName:'ID',show:true},{key:'name',displayName:'Name',show:true}]
             }, 
             { displayName: "D2", 
             dataList: [{ id: 1, name: "Chethan" }, { id: 1, name: "Chethan" }],
             columnData:[{key:'id',displayName:'ID',show:true},{key:'name',displayName:'Name',show:true}]
             }
            ],
            [{ displayName: "D3",
             dataList: [{ id: 1, name: "Chethan" }, { id: 1, name: "Chethan" }],
             columnData:[{key:'id',displayName:'ID',show:true},{key:'name',displayName:'Name',show:true}]
             }, 
             { displayName: "D4", 
             dataList: [{ id: 1, name: "Chethan" }, { id: 1, name: "Chethan" }],
             columnData:[{key:'id',displayName:'ID',show:true},{key:'name',displayName:'Name',show:true}]
             }
            ]
        ];


        this.state = {
            dashboardData
        }
    }

    CheckColumn(colHeadata){
        console.log(colHeadata);
        colHeadata.columnData.map(data=>{
            data['show']=false;
            //console.log(data['show']);
        })
    }

    render() {
        return (
            <div>Chethan

                {this.state.dashboardData.map(rowData => {
                return <Row>
                    {rowData.map(colHeadData => {
                        return (
                            <Col>
                                <ListGroup>
                                    <ListGroupItem as="li" active="true" onClick={this.CheckColumn.bind(this,colHeadData)}>{colHeadData.displayName}</ListGroupItem>
                                </ListGroup>
                                <DashboardItem  dataList={colHeadData.dataList} columnData={colHeadData.columnData}></DashboardItem>
                            </Col>);

                    })};

                </Row>
            })};
    
            </div>
        );
    }

}