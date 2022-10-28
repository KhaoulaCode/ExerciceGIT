import {configureStore } from '@reduxjs/toolkit';
import settingReducer from './redux-slices/setting.js';


export default configureStore({
    reducer: {
        settings: settingReducer,
    },
})