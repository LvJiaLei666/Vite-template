import mockSetup, { mockResponseSuccessWrap } from '@/utils/mockSetup'
import Mock from 'mockjs'

const loginResponseData = Mock.mock({ 'userId|8': /[0-9]/ })

const userInfo = Mock.mock({
  'userId|8': /[0-9]/,
  'nickName|1': 'dsfjkl',
  'phone|11': '6'
})

mockSetup({
  setup() {
    Mock.mock(new RegExp('/api/login'), () => mockResponseSuccessWrap(loginResponseData))
    Mock.mock(new RegExp('/api/getUserInfo'), () => mockResponseSuccessWrap(userInfo))
  }
})
