import request, { get, post, deleteItem, patch } from './request'

// 获取学生
export async function getStudent(name ?: string) : Promise<StudentType[]> {
    return get('/students', { name })
}
// 根据id获取学生
export async function getStudentById(id : string ): Promise<StudentType> {
    return request.get<StudentType, StudentType>(`/students/${id}`)
}

// 新增学生
export async function addStudent(student: StudentType) : Promise<StudentType> {
    return post('/students', student)
}

// 删除学生
export async function delStudent (id: string) : Promise<StudentType> {
    return deleteItem(`/students/${id}`)
}

// 修改学生
export async function pacthSutdent (id: string, student: StudentType): Promise<StudentType> {
    return patch(`/students/${id}`, student)
}


// get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>; 