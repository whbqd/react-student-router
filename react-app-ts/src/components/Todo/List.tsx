
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE, DEL } from '../../redux/todoSlice'

function List() {
    const dispatch = useDispatch()
    const statList = useSelector((state: any) => {
        console.log('state>>>,', state)
        return state.todo.list
    }) as (todoListState)[]

    function handleDel (index: number) {
        // props.store.dispatch(delListActions(index))
        dispatch(DEL(index))
    }
    function handleUpdate (index: number) {
        dispatch(UPDATE(index))
        // props.store.dispatch(updateListActions(index))
    }
    return (
        <ul className="list">
            {
                statList.map((it, index) => (
                    <li className="list-item" key={index}>
                        <span onClick={() => handleUpdate(index)} className={[it.status ? 'ok' : ''].join(' ')}>{it.content}</span>
                        <button onClick={() => handleDel(index)} type="button" className="btn btn-danger btn-sm">删除</button>
                    </li>
                ))
            }

        </ul>
    );
}

export default List;
