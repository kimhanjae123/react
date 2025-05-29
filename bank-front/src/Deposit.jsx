import { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { url } from './config';
import axios from 'axios';

export const Deposit = () => {
    const[deposit,setDeposit] = useState({id:'',money:0})
    const[openModal,setOpenModal] = useState(false);
    const [acc,setAcc] = useState({id:'',name:'',balance:0,type:'',grade:''})
    const edit = (e) => {
        setDeposit({...deposit, [e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/deposit`,deposit)
        .then(res=>{
            console.log(res);
            setAcc(res.data);
            setOpenModal(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="route">
            <h4>입금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={edit}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="money" onChange={edit}/>
                    </Col>
                </FormGroup>
               
                <Button color="primary" onClick={submit}>입금</Button>
            </Form>

            <Modal isOpen={openModal}>
                <ModalHeader>축하합니다.</ModalHeader>
                <ModalBody>
                    잔액 : {acc.balance}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>setOpenModal(false)}>확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

