import {configureStore}  from '@reduxjs/toolkit'
import navigationReducer from './states/_navigation'
import dashboardReducer from './states/_dashboard'
import modalReducer from './states/_modal'

export default configureStore({
    reducer: {
        navigation: navigationReducer,
        dashboard: dashboardReducer,
        modal: modalReducer
    }
})