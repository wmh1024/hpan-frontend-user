import request from '@/utils/request.js'

export const getList = (typeString) => {
    const typeMap = {
        'mac': 2,
        'win': 1
    }
    return request.get(`/list?type=${typeMap[typeString]}`, )
}
