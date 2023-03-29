import isDev from '@/utils/isDev'

export default ({ setup, mock = true }: { setup: () => void; mock?: boolean }) => {
  if (mock && isDev) setup()
}

export const mockResponseSuccessWrap = (data: unknown) => {
  return {
    data,
    code: 200,
    msg: '操作成功'
  }
}

export const mockResponseErrWrap = (data: unknown, msg = '', code = 500) => {
  return {
    data,
    msg,
    code
  }
}
