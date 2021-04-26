import { Task, TaskAction, ADD_TASK, CHANGE_TASK } from "./actions"

export interface TaskConfig {
    tasks: Task[]
}

const defaultState: TaskConfig = {
    tasks: []
}

export const taskReducer = (state: TaskConfig = defaultState, action: TaskAction): TaskConfig => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
        case CHANGE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(
                    (task: Task) => task.id === action.payload.id ? { ...task, status: action.payload.status, finishDate: action.payload.finishDate }
                        : task
                )
            }
    }

    return state
}