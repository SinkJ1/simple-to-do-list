export const ADD_TASK = 'ADD_TASK'
export const CHANGE_TASK = 'CHANGE_TASK'


export enum Status {
    active = "Active",
    comleted = "Completed",
    failed = "Failed",
    default = "",
}

export interface Task {
    id: number,
    name: string,
    startDate: string,
    finishDate: string,
    status: Status
}

type AddTaskAction = {
    type: typeof ADD_TASK,
    payload: Task
}

type ChangeTaskAction = {
    type: typeof CHANGE_TASK,
    payload: Task
}

export type TaskAction = AddTaskAction | ChangeTaskAction

export const addTask = (task: Task): AddTaskAction => ({
    type: ADD_TASK,
    payload: task
})

export const changeTask = (newTask: Task): ChangeTaskAction => ({
    type: CHANGE_TASK,
    payload: newTask
})

