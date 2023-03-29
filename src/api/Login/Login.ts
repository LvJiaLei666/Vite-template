import service from '@/utils/service'

export interface loginModel {
  accountNumber: string
  password: string
}

export interface loginResponse {
  userId: string
}

export function login(data: loginModel) {
  return service.post<loginResponse>('api/login', data)
}

export interface userInfo {
  phone: string
  nickName: string
  sex: 0 | 1
}

export function getUserInfo(data: { userId: string }) {
  return service.post<userInfo>('api/getUserInfo', data)
}
