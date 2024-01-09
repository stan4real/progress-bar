import {createSlice} from '@reduxjs/toolkit'

export const stagesSlice = createSlice({
    name : 'stages',
    initialState:{
        value:0,
        quantity:[],
        thresholdPoints:[],
        progress:0
    },
    reducers:{
        sumScore:(state,action) =>{
            let stages = action.payload,
            sum = 0
            stages.map(itemStages => (
                itemStages.games.map(itemGames => {
                    if(itemGames.isPlayed){
                        sum+=itemGames.bestResult
                    }
                })
            )) 
            state.value=sum
        },
        onChangeScore:(state,action) => {
            state.value=action.payload
        },
        getQuantity:(state,action) =>{
            state.quantity = action.payload.length
            
        },
        getThresholdPoints:(state,action)=>{
            state.thresholdPoints=[]
            action.payload.map(item => {
                state.thresholdPoints.push(item.thresholdPoints)
            })
        },
        getProgress:(state)=>{
            let count = 0
            state.progress=0
            state.thresholdPoints.map(item => {
                if (state.value>=item) {
                    state.progress+=100/state.quantity;
                    count++
                } else if((state.value<item) & (state.value*2>item)) {
                    state.progress+=(((state.value/state.thresholdPoints[count])*100)/state.quantity)
                } 
            })
        },
        resetState:(state)=>{
            state.value=0
            state.quantity=0
            state.thresholdPoints=[]
            state.progress=0
        }
    },
})

export const {sumScore, resetState, getQuantity, getThresholdPoints, getProgress, onChangeScore} = stagesSlice.actions

export default stagesSlice.reducer