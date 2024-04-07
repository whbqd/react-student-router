

import types from './types'
export const addListActions = (newItem: string) => ({
    type: types.ADD,
    data: newItem
})

export const delListActions = (index: number) => ({
    type: types.DEL,
    data: index
})
