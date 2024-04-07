import {ADD, DEL} from './types'
const defaultState = {
    list: [{
        content: '学习redux',
        status: false,
    }]
}

export function todoReducer (state = defaultState, action: action) {
    switch (action.type) {
        case ADD: {
            const list = [...state.list]
            list.push({
                content: action.data,
                status: false
            })
            return {
                list
            }
        }
        case DEL: {

            const list = [...state.list]
            list.splice(action.data, 1)
            return {
                list
            }
        }
        default : return state
    }
}
