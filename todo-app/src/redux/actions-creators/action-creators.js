import Constants from "../constants/constants";

export const createTodo = data => {
    return {
        type : Constants.CREATE_TODO,
        payload : data
    }
}

export const clearInputTodo = () => {
    return {
        type: Constants.CLEAR_TODO_INPUT
    }
}

export const naviageCreatetor = data => {
    return {
        type : Constants.NAVIGATE_TO_DIFFERENT_PAGE,
        payload : data
    }
}

export const newInput = data => {
    return {
        type: Constants.TODO_INPUT_CHANGE,
        payload: data
    }
}

export const updateTodo = data => {
    return {
        type: Constants.UPDATE_TODO,
        payload: data
    }
}