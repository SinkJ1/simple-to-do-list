import React from "react"
import { Form, Col } from "react-bootstrap"

interface Props {
    taskName: string,
    startDate: string,
    finishDate: string,
    confirmButton: React.ButtonHTMLAttributes<HTMLButtonElement> | null,
    rejectButton: React.ButtonHTMLAttributes<HTMLButtonElement> | null,
}

const TaskBody = ({
    taskName,
    startDate,
    finishDate,
    confirmButton,
    rejectButton
}: Props) => {

    return (
        <>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Label>{taskName}</Form.Label>
                    </Col>
                    <Col>
                        {confirmButton}
                        {rejectButton}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>{startDate}</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label>{finishDate}</Form.Label>
                    </Col>
                </Form.Row>
            </Form>
        </>)
}

export default TaskBody