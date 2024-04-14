import { addStudent, getStudentById, pacthSutdent } from '../api/student'
import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addStudentList } from '../redux/studentSlice'


function Add () {
    const dispatch = useDispatch()
    const [form, setForm] = useState<StudentType>({
        name: '',
        age: 0
    })
    const { id } = useParams()
    const [msg, setMsg] = useState('---添加学生---')
    // 统一绑定form
    function update<K extends keyof StudentType>(key: K, value: StudentType[K]) {
        setForm((prevForm) => ({
            ...prevForm,
            [key]: value
        }))
    }
    // 提交
    async function submit (e: FormEvent) {
        e.preventDefault()
        // 循环
        const keys = Object.keys(form) as (keyof StudentType)[]
        for (const key of keys) {
            if (!form[key]) {
                setMsg('不能为空！')
                return false
            }
        }
        try {
            const result = id ? await pacthSutdent(id, form) : await dispatch(addStudentList(form) as any)
            console.log('result>', result)
            setMsg(id ? '修改成功!!' : '添加成功！！！')
        } catch(err) {
            setMsg(id ? '修改失败!!' :'添加失败!!!')
        }
    }
    // 修改回填
    useEffect(() => {
        if (id) {
            getStudentById(id).then(stuInfo => {
                setForm(stuInfo)
            })
        }
    }, [id])
    return (
        <div style={{padding: '10px'}}>
            <div className="alert alert-primary" role="alert">
               {msg}
            </div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">姓名</label>
                    <input value={form.name} onChange={e=> update('name', e.target.value)} type="text" className="form-control" id="exampleInputEmail1" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">年龄</label>
                    <input value={form.age} onChange={e=> update('age', +e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">{ id ? '修改' : '新增' }</button>
                </form>
        </div>
    )
}

export default Add