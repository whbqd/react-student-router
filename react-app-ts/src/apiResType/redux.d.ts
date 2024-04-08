


declare interface action {
    type: string
    data: any
}

declare interface todoState {
    list: todoListState[]
}
type todoListState = {
    content: string
    status: boolean
}
