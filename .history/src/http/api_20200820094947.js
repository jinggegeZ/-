import service from './index'

export default{
    //获取城市
    getprovince (){
        return service.get('/province')
    }
}