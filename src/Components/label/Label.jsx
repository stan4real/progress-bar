import React, { useState } from 'react'
import './label.scss'
import { Star } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'

const Label = ({threshold}) => {
    const [fillColor,setFillColor] = useState('black')
    const [progress, setProgress] = useState('0%')
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()
    const state = useSelector((state) => state.stages)

    const getFill=(value) =>{
        if(value>=threshold){
            return 'blue'
        } else {
            return 'white'
        }
    }
    const getLabel=(value, threshold) =>{
        if((value*2 <= threshold) | (value > threshold)){
            return `${threshold}`
        } else {
            return `${value}/${threshold}`
        }
    }
    return (
        <div className='stages'>
            <div className='stages__stars'>
                <Star color='blue'size={16} fill={getFill(state.value)}/>    
            </div>
            <div className='stages__digits'>
                {getLabel(state.value, threshold)}    
            </div>
        </div>
    )
}

export default Label