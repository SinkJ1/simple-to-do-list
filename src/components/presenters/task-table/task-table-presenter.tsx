import React, { useState } from "react"
import TaskTableContainer from "../../containers/task-table/task-table-container"
import Redux from 'redux'
import { connect } from "react-redux"
import { AppState } from "../../../store/types"
import { Task, TaskAction, addTask, Status, changeTask } from "../../../store/tasks/actions"
import { TaskConfig } from "../../../store/tasks/reducers"

interface StateToProps {
    tasks: TaskConfig
}

interface DispatchToProps {
    addTask: (task: Task) => void,
    changeTask: (task: Task) => void,
}

type Props = StateToProps & DispatchToProps

const TaskTablePresenter = ({ tasks, changeTask, addTask }: Props) => {

    const [modalWindowHide, setModalWindowHide] = useState(false)

    const onTaskAdd = (task: Task) => {
        addTask(task)
    }


    const onTaskReject = (id: number) => {
        let task = tasks.tasks.filter((value: Task) => value.id === id)[0]
        task.status = Status.failed
        task.finishDate = new Date().toLocaleDateString()
        changeTask(task)
    }

    const onTaskComplete = (id: number) => {
        let task = tasks.tasks.filter((value: Task) => value.id === id)[0]
        task.finishDate = new Date().toLocaleDateString()
        task.status = Status.comleted
        changeTask(task)
    }

    return (
        <>
            <TaskTableContainer onTaskAdd={onTaskAdd}
                onTaskComplete={onTaskComplete}
                onTaskReject={onTaskReject}
                modalWindowHide={modalWindowHide}
                setModalWindowHide={setModalWindowHide}
                tasks={tasks} />
        </>
    )
}

const mapStateToProps = (state: AppState): StateToProps => ({
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch: Redux.Dispatch<TaskAction>): DispatchToProps => ({
    addTask: (task: Task) => dispatch(addTask(task)),
    changeTask: (task: Task) => dispatch(changeTask(task)),
})

export default connect<StateToProps, DispatchToProps, any, AppState>(mapStateToProps, mapDispatchToProps)(TaskTablePresenter)