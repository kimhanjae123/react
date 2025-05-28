import {Col, Button, Form, FormGroup, Label, Input,Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react';

export const AccountInfo = () => {
    const [acc, setAcc] = useState({id:'',name:'',balance:0,type:'일반계좌',grade:''})

    const editAcc = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }

    return (
        <div className="route">
            <h4>계좌 조회</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={editAcc}/>
                    </Col>
                   
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" onChange={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" onChange={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" onChange={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" onChange={editAcc}/>
                    </Col>
                </FormGroup>
               
               
            </Form>

            {/* <Modal isOpen={false}>
                <ModalHeader>{}</ModalHeader>
                <ModalBody>
                    {}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">확인</Button>
                    <Button color="secondary">취소</Button>
                </ModalFooter>
            </Modal> */}
        </div>
    )
}

