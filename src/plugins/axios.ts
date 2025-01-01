import globalAxios from 'axios'
import { useSnackStore } from '../stores/snack'

// const errorStore = useErrorStore()
export const axios = globalAxios.create({})
axios.interceptors.request.use(req => {
  if (!req.headers['Authorization'] && localStorage.getItem('apphub-token')) {
    req.headers['Authorization'] = localStorage.getItem('apphub-token')
  }
  return req
})
axios.interceptors.response.use(resp => resp, error => {
  useSnackStore().emit('error', error)
  throw error
})

export function useAxios() {
  return axios
}
