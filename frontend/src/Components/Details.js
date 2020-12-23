import React, { useEffect, useState } from 'react';
import { Container, Header, Grid, Table, Menu, Icon, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Details = ({ match }) => { 
    const { name } = match.params;
    console.log("data:",name);
    const [data, setData] = useState([])

    useEffect(()=>{
        const func = async ()=>{
            const url = "/ads/"+ name;
            const response = await fetch(url,{method:"POST"});
            const data = await response.json();
            
            setData(Object.values(data))
        }
        func();
    },[])

    return(
        
        <Container style={{ marginTop: '3em' }}>
            
            { data.length > 0 ?
            <div>
            <Header textAlign="center" style={{fontSize:30}} dividing >{data[0].name}</Header>
            
            { data.length > 0 && data[0].platforms.facebook != null ?
            <Table striped fixed>
                <Table.Body>
                <Table.Row>
                    <Table.Cell width="3">
                    <Label ribbon>Facebook</Label>
                    </Table.Cell>
                    <Table.Cell width="5"><b>Header:</b> {data[0].platforms.facebook.creatives.header}</Table.Cell>
                    <Table.Cell><b>Description:</b> {data[0].platforms.facebook.creatives.description}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><b>Url:</b> {data[0].platforms.facebook.creatives.url}</Table.Cell>
                    <Table.Cell><b>Start Date:</b> {data[0].platforms.facebook.start_date}</Table.Cell>
                    <Table.Cell><b>End Date:</b> {data[0].platforms.facebook.end_date}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><b>Status:</b> {data[0].platforms.facebook.status}</Table.Cell>
                    <Table.Cell><b>Remaining budget:</b> {data[0].platforms.facebook.remaining_budget}</Table.Cell>
                    <Table.Cell><b>Total budget:</b> {data[0].platforms.facebook.total_budget}</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>            
            : "" }
            </div>
            : "" }
            { data.length > 0 && data[0].platforms.instagram != null ?
            <Table fixed striped>
            <Table.Body>
                <Table.Row>
                    <Table.Cell width="3">
                    <Label ribbon>Instagram</Label>
                    </Table.Cell>
                    <Table.Cell width="5"><b>Header:</b> {data[0].platforms.instagram.creatives.header}</Table.Cell>
                    <Table.Cell><b>Description:</b> {data[0].platforms.instagram.creatives.description}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><b>Url:</b> {data[0].platforms.instagram.creatives.url}</Table.Cell>
                    <Table.Cell><b>Start Date:</b> {data[0].platforms.instagram.start_date}</Table.Cell>
                    <Table.Cell><b>End Date:</b> {data[0].platforms.instagram.end_date}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><b>Status:</b> {data[0].platforms.instagram.status}</Table.Cell>
                    <Table.Cell><b>Remaining budget:</b> {data[0].platforms.instagram.remaining_budget}</Table.Cell>
                    <Table.Cell><b>Total budget:</b> {data[0].platforms.instagram.total_budget}</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            : "" }
            { data.length > 0 && data[0].platforms.google !=null ?
                <Table fixed striped>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width="3">
                        <Label ribbon>Google</Label>
                        </Table.Cell>
                        <Table.Cell width="5"><b>Header:</b> {data[0].platforms.google.creatives.header_1 + ", " + data[0].platforms.google.creatives.header_2}</Table.Cell>
                        <Table.Cell><b>Description:</b> {data[0].platforms.google.creatives.description}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b>Url:</b> {data[0].platforms.google.creatives.url}</Table.Cell>
                        <Table.Cell><b>Start Date:</b> {data[0].platforms.google.start_date}</Table.Cell>
                        <Table.Cell><b>End Date:</b> {data[0].platforms.google.end_date}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b>Status:</b> {data[0].platforms.google.status}</Table.Cell>
                        <Table.Cell><b>Remaining budget:</b> {data[0].platforms.google.remaining_budget}</Table.Cell>
                        <Table.Cell><b>Total budget:</b> {data[0].platforms.google.total_budget}</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                : "" }
            
        </Container>
    )
}

export default Details
