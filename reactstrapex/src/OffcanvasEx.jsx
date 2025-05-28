import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

export default function OffcanvasEx(){
    const [show,setShow] = useState(false);
    const toggle =() => setShow(!show);
    return(
        <>
            <img src = '/vite.svg' onClick={toggle} width={"100px"}/>
            <Offcanvas toggle={toggle} isOpen={show}>
                <OffcanvasHeader toggle={toggle}>
                    Offcanvas
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        this is the Offcanvas body
                    </strong>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}