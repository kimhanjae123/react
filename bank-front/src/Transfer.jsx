import {Col, Button, Form, FormGroup, Label, Input,Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';

export const Transfer = () => {
    const [acc, setAcc] = useState({id:'',name:'',balance:0,type:'일반계좌',grade:''})

    const editAcc = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }

    return (
        <div className="route">
            <h4>계좌이체</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>출금계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>입금계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" onChange={editAcc}/>
                    </Col>
                </FormGroup>
               
                <Button color="primary">송금</Button>
            </Form>

            <Modal isOpen={false}>
                <ModalHeader>{}</ModalHeader>
                <ModalBody>
                    {}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">확인</Button>
                    <Button color="secondary">취소</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

