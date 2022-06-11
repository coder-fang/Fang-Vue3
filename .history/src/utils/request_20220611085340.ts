/**
 *  request 请求封装
 */
import service from './service'
export default {
    get(url: string, data={}){
        return new Promise((resolve,reject)=>{
            service 
                .get(url,{params:data})
                .then(response => {
                    resolve(response.data)
                })
                .catch(err=>{
                    reject(err)
                });
        });
    },
    delete(url: string, data={}){
        return new Promise((resolve,reject)=>{
            service
                .delete(url,{params:data})
                .then(response=>{
                    resolve(response.data)
                })
                .catch(err=>{
                    reject(err)
                });
        });
    },
    post(url: string,data = {}){
        return new Promise((resolve,reject)=>{
            service
                .post(url,{param:data})
                .then(response.data)
        })
    }
}