import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile-reducer/profileReducer'

export default configureStore({
  reducer: {
    profile: profileReducer
  }
})