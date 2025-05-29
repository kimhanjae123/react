import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

export const AccountInfoForm = () => {
    const [id, setId] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState({ title: '', content: '' });
    const [acc,setAcc] = useState({id:'',name:'',balance:'',grade:''})
    const [hidden,setHidden] = useState(true);


    const submit = (e) => {
        e.preventDefault();
        axios.get(`${url}/accountInfo/${id}`)
            .then(res => {
                if (res.data == true) {
                    setMessage({ title: "성공", content: "계좌조회 완료" })
                } else {
                    setMessage({ title: "실패", content: "계좌조회 실패" })
                }
                setOpenModal(true);
            })
            .catch(err => {
                setMessage({ title: "실패", content: "계좌조회 실패" })
                setOpenModal(true);
            })
    }

    return (
        <div className="route">
            <h4>계좌 조회</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={(e) => setId(e.target.value)} />
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>조회</Button>
            </Form>

            <Modal isOpen={openModal}>
                <ModalHeader>{message.title}</ModalHeader>
                <ModalBody>
                    {message.content}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpenModal(false)}>확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AccountInfoForm;