import {Col, Button, Form, FormGroup, Label, Input,Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';
import { url } from './config';
import axios from 'axios';
export const Withdraw = () => {
    const [widthdraw,setWithdraw] = useState({id:'',money:0})
    const [openModal,setOpenModal] = useState(false);
    const [acc,setAcc] = useState({id:'',name:'',balance:0,type:'',grade:''})
    const edit = (e) => {
        setWithdraw({...widthdraw,[e.target.name]:e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/withdraw`,widthdraw)
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
            <h4>출금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={edit}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>출금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="money" onChange={edit}/>
                    </Col>
                </FormGroup>
               
                <Button color="primary" onClick={submit}>출금</Button>
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

