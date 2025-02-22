import axios from '@axios'
import { API_BASE_URL } from '@projectConfig'
import { defineStore } from 'pinia'

export const useCheckinStore = defineStore('CheckinStore', {
  actions: {
    // 👉 Fetch users data
    fetchCheckin(selectedDate) { return axios.get(`${API_BASE_URL}/dashboard/checkins/${selectedDate}`) },
  },
})
