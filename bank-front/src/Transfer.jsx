import {Col, Button, Form, FormGroup, Label, Input,Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import { url } from './config';

export const Transfer = () => {
    const [transfer,setTransfer] = useState({sid:'',rid:'',money:0})
    const [sacc, setSacc] = useState({id:'',name:'',balance:0,type:'',grade:''})
    const [racc, setRacc] = useState({id:'',name:'',balance:0,type:'',grade:''})
    const[openModal,setOpenModal] = useState(false);

    const edit = (e) => {
        setTransfer({...transfer, [e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/transfer`,transfer)
        .then(res=>{
            console.log(res);
            setSacc(res.data);
            setOpenModal(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="route">
            <h4>계좌이체</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>출금계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="sid" onChange={edit}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>입금계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="rid" onChange={edit}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="money" onChange={edit}/>
                    </Col>
                </FormGroup>
               
                <Button color="primary" onClick={submit}>송금</Button>
            </Form>

            <Modal isOpen={openModal}>
                <ModalHeader>계좌이체 성공!</ModalHeader>
                <ModalBody>
                    잔액 : {sacc.balance}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>setOpenModal(false)}>확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

