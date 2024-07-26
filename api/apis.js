import {request} from "@/api/request.js"

export function apiGetAll(){
	return request({url:"/all"})
}

export function apiInsert(data){
	return request({url:"/add",method:"POST",data})
}