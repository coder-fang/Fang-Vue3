/**
 * axios 请求配置
 */
import axios ,{AxiosRequestConfig,AxiosResponse} from 'axios'
import { ElNotification } from 'element-plus'
/**
 * 请求失败后的错误统一处理
 * @param status 请求失败的状态码
 * /