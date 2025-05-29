import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { url } from './config';

export const MakeAccount = () => {
    const [acc, setAcc] = useState({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' })

    const [openModal,setOpenModal] = useState(false);
    const [message,setMessage] = useState({title:'',content:''});
    const editAcc = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/makeAccount`, acc)
            .then(res=>{
                console.log(res);
                if(res.data==true){
                    setMessage({title:"성공",content:"계좌가 정산적으로 계설되었습니다."})
                }else{
                    setMessage({title:"실패",content:"계좌가 개설에 오류가 발생했습니다."})
                }
                setOpenModal(true);
            })
            .catch(err=>{
                console.log(err);
                setMessage({title:"실패",content:"계좌가 개설에 오류가 발생했습니다."})
                setOpenModal(true);
            })
    }

    return (
        <div className="route">
            <h4>계좌 개설</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" onChange={editAcc} />
                    </Col>
                    <Col sm={3}>
                        <Button type="button" color="success">중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" onChange={editAcc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" onChange={editAcc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="radio" id="type" value="일반" name="type" checked={acc.type == "일반"}
                            onChange={editAcc} />&nbsp;일반
                        &nbsp;&nbsp;
                        <Input type="radio" id="type" value="특수" name="type" checked={acc.type == "특수"}
                            onChange={editAcc} />&nbsp;특수
                        &nbsp;&nbsp;
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="select" id="grade" onChange={editAcc} disabled={acc.type != "특수"} name="grade">
                            <option value="">선택하세요</option>
                            <option value="VIP">VIP</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Normal">Normal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>계좌개설</Button>
            </Form>

            <Modal isOpen={openModal}>
                <ModalHeader>{message.title}</ModalHeader>
                <ModalBody>
                    {message.content }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>setOpenModal(false)}>확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

