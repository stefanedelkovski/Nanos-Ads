import React, { useEffect, useState } from 'react';
import useReactRouter from "use-react-router";

import { Table, Button, Header, Container, Icon }  from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TabularData = () => { 
    const {history, location} = useReactRouter();
    const [data, setData] = useState([])

    useEffect(()=>{
        const func = async ()=>{

        const url = "/ads";
        const response = await fetch(url);
        const data = await response.json();
        
        setData(Object.values(data))
        
        }
        func();
    },[])

    console.log("data:",data[1]);

    var data_list = [];
    for (var i = 0; i < data.length; i++) {
        for( var key in data[i]){
            data_list.push(data[i][key]);
        }
    }

    const handleClick = (data) => {
        history.push('/details/'+data.name);
    }
    return(
        <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>Nano's</Header>

        <Header as='h2' dividing>
        Ads overview
        </Header>
        <Table celled structured unstackable className="sizeTable" >
            <Table.Header >
            <Table.Row>
                <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Budget</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Goal</Table.HeaderCell>
                <Table.HeaderCell colSpan='3' textAlign='center'>Platforms</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Action</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell >Facebook</Table.HeaderCell>
                <Table.HeaderCell >Instagram</Table.HeaderCell>
                <Table.HeaderCell >Google</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
                { data_list.map((row)=>{
                        console.log(row);
                        return(
                            <Table.Row>
                                <Table.Cell>{row.name}</Table.Cell>
                                <Table.Cell>{row.status}</Table.Cell>
                                <Table.Cell textAlign='right'>{row.total_budget}</Table.Cell>
                                <Table.Cell>{row.goal}</Table.Cell>
                                <Table.Cell >
                                    {row.platforms.facebook !=null ? <Icon color='green' name='checkmark' size='large'/> : ""}
                                </Table.Cell>
                                <Table.Cell >
                                    {row.platforms.instagram !=null ? <Icon color='green' name='checkmark' size='large'/> : ""}
                                </Table.Cell>
                                <Table.Cell >
                                    {row.platforms.google !=null ? <Icon color='green' name='checkmark' size='large'/> : ""}
                                </Table.Cell>
                                <Table.Cell><Button onClick={()=>handleClick(row)}> Show details</Button></Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
        </Container>
    )
}

export default TabularData
