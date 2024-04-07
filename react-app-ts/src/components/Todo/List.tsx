import React from 'react';
import {delListActions} from "../../store/actions";
interface Props {
    store?: any
}
function List(props: Props) {
    console.log(props.store.getState())
    let statList = props.store.getState().list as (todoListState)[]
    function handleDel (index: number) {
        props.store.dispatch(delListActions(index))
    }
    return (
        <ul className="list">
            {/*<li className="list-item">*/}
            {/*    <span>内容 xxxxx</span>*/}
            {/*    <button type="button" className="btn btn-danger btn-sm" >删除</button>*/}
            {/*</li>*/}
            {
                statList.map((it, index) => (
                    <li className="list-item" key={index}>
                        <span>{it.content}</span>
                        <button onClick={() => handleDel(index)} type="button" className="btn btn-danger btn-sm">删除</button>
                    </li>
                ))
            }

        </ul>
    );
}

export default List;
