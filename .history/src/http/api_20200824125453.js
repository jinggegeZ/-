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
    },
    //6.获取热门城市
    gethotcity(){
        return service.get('/hotCity')
    },
    //7.登录
    login({username,password}){
        return service.post(`/users/login`,{username,password})
    },
    //8.注册
    resgiter({username,password,email}){
        return service.post(`/users/register`,{username,password,email})
    }
    //9.商铺详情
    product(){
       return service.get(`/products?keyword=${keyword}&city=${city}`)
    }

}