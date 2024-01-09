import {configureStore} from '@reduxjs/toolkit'
import stagesSlice from './slices/stagesSlice'

export default configureStore ({
    reducer: {
        stages:stagesSlice,
    },
})