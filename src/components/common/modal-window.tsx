import React from "react"
import { Modal } from "react-bootstrap"

interface Props {
    content: any,
    onHide(): void,
    show: boolean
}

export const ModalWindow = ({ content, onHide, show }: Props) => {
    return (
        <Modal
            show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
        </Modal>
    );
}
