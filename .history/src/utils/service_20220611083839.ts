/**
 * axios 请求配置
 */
import axios ,{AxiosRequestConfig,AxiosResponse} from 'axios'
import { ElNotification } from 'element-plus'
/**
 * 请求失败后的错误统一处理
 * @param status 请求失败的状态码
 */
const errorHandle = (status: number) => {
    // 状态码判断
    switch(status){
        case 302: ElNotification.error('接口重定向了！')
            break;
        case 400:
            ElNotification.error('发出的请求有错误，服务器没有进行新建或修改数据的操作==>'+ status) 
        case 401:
            ElNotification.error('token:登录失败==>'+ status)
    }
}
