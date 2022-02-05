import axios from 'axios'
const HOST = 'https://demo-api.vsdev.space'

export const getters = {
  getMainPage: async () => {
    return await axios.get(`${HOST}/api/delivery/home_page`)
  },
  getAboutPage: async () => {
    return await axios.get(`${HOST}/api/delivery/about_page`)
  },
  getWidget: async () => {
    return await axios.get(`${HOST}/api/delivery/left_widget`)
  },
  getForm: async () => {
    return await axios.get(`${HOST}/api/delivery/sales/form`)
  },
  getDel: async () => {
    return await axios.get(`${HOST}/api/delivery/sales`)
  },
}
