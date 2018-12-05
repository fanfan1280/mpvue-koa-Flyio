import fly from './index'

export function registUser(data) {
  return fly.get('/registUser', data)
}