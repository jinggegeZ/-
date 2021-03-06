import service from './index'

export default{
    //1.获取城市
    getprovince (){
        return service.get('/province')
    },
    //2.获取城市
    getposition(){
        return service.get('/position')
    },
    //3.关键词搜索
    getkeyword({city,keyword}){
        return service.get(`/results?city=${city}&keyword=${keyword}`)
    },
    //4.全部扥类
    getall(){
        return service.get('/menu')
    },
    //5.获取省份所有城市
    getcity(id){
        return service.get(`/citys/${id}`)
    }
    

}