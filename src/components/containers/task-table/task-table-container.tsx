import React from "react"
import { Table, Button } from "react-bootstrap"
import TaskBody from "../../common/task-body"
import { Status, Task } from "../../../store/tasks/actions"
import { TaskConfig } from "../../../store/tasks/reducers"
import { ModalWindow } from "../../common/modal-window"
import AddTaskModalWindowContent from "../../common/add-task-modal-window-content"

const active = "Active"
const add = "Add"
const completed = "Completed"
const failed = "failed"

interface Props {
    onTaskAdd: (task: Task) => void,
    onTaskComplete: (id: number) => void,
    onTaskReject: (id: number) => void,
    modalWindowHide: boolean,
    setModalWindowHide: (value: boolean) => void,
    tasks: TaskConfig
}

const TaskTableContainer = ({ onTaskAdd, onTaskComplete, onTaskReject, modalWindowHide, setModalWindowHide, tasks }: Props) => {
    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th><Button variant="link" onClick={() => setModalWindowHide(true)}>{add}</Button></th>
                        <th>{active}</th>
                        <th>{completed}</th>
                        <th>{failed}</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.tasks.map((value, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.status === Status.active ?
                                <TaskBody taskName={value.name}
                                    startDate={value.startDate}
                                    finishDate={value.finishDate}
                                    confirmButton={<Button variant="light" size="sm" onClick={() => { onTaskComplete(value.id) }}>{completed}</Button>}
                                    rejectButton={<Button variant="light" size="sm" onClick={() => { onTaskReject(value.id) }}>{failed}</Button>}
                                /> : ""}</td>
                            <td>{value.status === Status.comleted ?
                                <TaskBody taskName={value.name}
                                    startDate={value.startDate}
                                    finishDate={value.finishDate}
                                    confirmButton={null}
                                    rejectButton={null} /> : ""}</td>
                            <td>{value.status === Status.failed ?
                                <TaskBody taskName={value.name}
                                    startDate={value.startDate}
                                    finishDate={value.finishDate}
                                    confirmButton={null}
                                    rejectButton={null} /> : ""}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
            <ModalWindow content={<AddTaskModalWindowContent onTaskAdd={onTaskAdd} onHide={() => setModalWindowHide(false)} />} onHide={() => setModalWindowHide(false)} show={modalWindowHide} />
        </>
    )
}

export default TaskTableContainer