import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { url } from './config';

export default function AccountInfo() {
    const [id, setId] = useState('');
    const [acc, setAcc] = useState({id:'',name:'',balance:0,type:'',grade:''})
    const [hidden, setHidden] = useState(true)
    const submit = (e) => {
        e.preventDefault();                   //form 이라서 해줌
        axios.get(`${url}/accountInfo/${id}`)
            .then(res => {
                console.log(res);
                setAcc(res.data);
                setHidden(false);
            })
            .catch(err => {
                console.log(err)
                
            })
    }

    return (
        <div className="route">
            <h4>계좌 조회</h4>
            <Form onSubmit={submit}>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" onChange={(e) => setId(e.target.value)} />
                    </Col>
                </FormGroup>
                <Button>계좌조회</Button>
            </Form>
            <br />
            <Form hidden={hidden}>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" readOnly value={acc.id}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" value={acc.name} readOnly />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>잔액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" id="balance" value={acc.balance} readOnly />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="type" name="type" id="type" value={acc.type} readOnly />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="grade" name="grade" id="grade" value={acc.grade} readOnly />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}