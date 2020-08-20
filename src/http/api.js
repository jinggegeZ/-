import service from './index'

export default{
    //获取城市
    getprovince (){
        return service.get('/province')
    },
    //获取城市
    getposition(){
        return service.get('/position')
    },
    //2.关键词搜索
    getkeyword({city,keyword}){
        return service.get(`/results?city=${city}&keyword=${keyword}`)
    }
}