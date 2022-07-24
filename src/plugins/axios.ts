import { sheetId } from '@/store'
import axios from 'axios'

axios.interceptors.request.use(request => {
  request.baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId.value}/`
  request.params = {
    ...request.params,
    key: 'AIzaSyA0SHRl9hg0zEWEp0byy8-ftv6xQg2lQF4'
  }

  return request
})

axios.interceptors.response.use(response => response.data)
