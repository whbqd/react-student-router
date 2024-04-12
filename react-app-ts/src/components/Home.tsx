import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getStudent, delStudent } from '../api/student'
import { useAppSelector, useAppDispatch } from '../redux/store'
import {getStudentList} from "../redux/studentSlice";
import { useDispatch } from 'react-redux'
function Home () {
    const [student, setStudent] = useState<StudentType[]>([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const { studentList } = useAppSelector((state) => {
        console.log('state>>>>>>', state)
        return state.student
    })
    const dispatch= useDispatch()
    async function handleDel (id: string) {
        await delStudent(id)
        // useAppDispatch(getStudentList())
    }
    function toEdit (id: string) {
        navigate(`/edit/${id}`)
    }
    useEffect(() => {
        dispatch(getStudentList() as any)
    }, [])
    useEffect(() => {
        // useAppDispatch(getStudentList(search))
    }, [search])

    return (
        <div>
            <div style={{margin: '10px 0'}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="请输入用户名搜索"
                    aria-label="Username"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-describedby="basic-addon1" />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">姓名</th>
                        <th scope="col">年龄</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((stu, index) => (
                        <tr key={stu.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{ stu.name }</td>
                            <td>{ stu.age }</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => toEdit(stu.id as string)}>修改</button>
                                <button className="btn btn-danger" style={{margin: '0 5px'}} onClick={() => handleDel(stu.id as string)}>删除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
