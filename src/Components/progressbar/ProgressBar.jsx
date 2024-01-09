import React, { useState } from 'react'
import './progressBar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { sumScore, resetState, getQuantity, getThresholdPoints, getProgress, onChangeScore } from '../../redux/slices/stagesSlice'
import Label from '../label/Label'


const ProgressBar = ({data}) => {

const [inputValue, setInputValue]=useState('')
const state = useSelector((state) => state.stages)  
const dispatch = useDispatch()

const Actions = () => {
  dispatch(sumScore(data))
  dispatch(getQuantity(data))
  dispatch(getThresholdPoints(data))
  dispatch(getProgress())
}
const handleChange = (e) => {
  setInputValue(e.target.value)
  dispatch(onChangeScore(e.target.value))
  dispatch(getProgress())
}

  return (
    <div className='container'>
        <div className='progressbar'>
              <div className='progressbar__content'>
                <div className='progressbar__content_labels' >
                  {
                    state.thresholdPoints.map(item => 
                      <Label key={item} threshold={item}/>
                  )}
                </div>
                <div className='progressbar__content_fill' style={{width:`${state.progress}%`}} ></div>
                <div className='progressbar__content_zero'>
                  0
                </div>
              </div>
            <div className='progressbar__buttons'>
                <input type='number' value={inputValue} onChange={handleChange} placeholder='Input progress value'></input>
                <button onClick={Actions}>State</button>
                <button onClick={() => dispatch(resetState())}>Reset All</button>
            </div>
      </div>
    </div>
  )
}

export default ProgressBar