import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error)
})


// 封装 GET 请求  
export async function get<T>(url: string, params?: any): Promise<T[]> {
    return await request.get<T[], any>(url, {params});
}  
  
// 封装 POST 请求  
export async function post<T>(url: string, data: any): Promise<T> {
    return await request.post<T, any>(url, data);
}  


// 封装 PUT 请求  
export async function put<T>(url: string, data: any): Promise<T> {
    return await request.put<T, any>(url, data);
}  
  
// 封装 DELETE 请求  
export async function deleteItem<T>(url: string): Promise<T> {
    return await request.delete<T, any>(url);
}  
  
// 封装 PATCH 请求  
export async function patch<T>(url: string, data: any): Promise<T> {
    return await request.patch<T, any>(url, data);
}
export default request

