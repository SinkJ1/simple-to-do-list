import React, { useState } from "react"
import { Task, Status } from "../../store/tasks/actions"
import { Form, Col, Button } from "react-bootstrap"


const name = "Name"
const startDate = "Start Date"
const finishDate = "Finish Date"
const addTask = "Add Task"

interface Props {
    onTaskAdd: (task: Task) => void,
    onHide: () => void,
}

const AddTaskModalWindowContent = ({ onTaskAdd, onHide }: Props) => {

    const [task, setTask] = useState<Task>({
        id: new Date().getUTCMilliseconds(),
        name: "",
        startDate: new Date().toLocaleDateString(),
        finishDate: "",
        status: Status.active
    })

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        onTaskAdd(task)
        onHide()
        e.preventDefault()
    }

    const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, startDate: new Date(e.target.value).toLocaleDateString() })
    }

    const onFinishDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, finishDate: new Date(e.target.value).toLocaleDateString() })
    }

    const onTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, name: e.target.value })
    }

    return (
        <>
            <Form>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>{name}</Form.Label>
                    <Form.Control type="text" placeholder="Enter task name" required value={task.name} onChange={onTaskNameChange} />
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formGridStartDate">
                        <Form.Label>{startDate}</Form.Label>
                        <Form.Control type="date" onChange={onStartDateChange}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>{finishDate}</Form.Label>
                        <Form.Control type="date" required onChange={onFinishDateChange}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    {addTask}
                </Button>
            </Form>
        </>
    )
}

export default AddTaskModalWindowContent