import {configureStore}  from '@reduxjs/toolkit'
import navigationReducer from './states/_navigation'
import dashboardReducer from './states/_dashboard'
import modalReducer from './states/_modal'
import filterReducer from './states/_filtering'

export default configureStore({
    reducer: {
        navigation: navigationReducer,
        dashboard: dashboardReducer,
        modal: modalReducer,
        filter: filterReducer
    }
})