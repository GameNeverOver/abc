import React, { useState, useEffect, useRef }  from 'react';
import './tv1.css';
export default function Tv (props) {
    const ref = useRef();
    const [time, setTime] = useState([0]);
    const [value, setValue] = useState('');
    const [barrageArr, setBarrageArr] = useState([]);
    useEffect(() => {
        timepoor()
    }, time);
    function timepoor(){
        setTimeout(() => {
            let nowTime = time[0] + 1;
            setTime([nowTime])
            barrageArr.forEach(item => {
                if(item.addTime+1 == time[0]){
                    let tag = document.createElement('span');
                    tag.setAttribute('class', 'tvContent');
                    tag.innerHTML = item.text;
                    ref.current.appendChild(tag);
                    tag.style.right = '0px';
                    tag.style.top = parseInt(Math.random() * 5) * 16 + 'px';
                    let x = parseInt(Math.random() * 5) + 5;
                    let timer = setInterval(() => {
                        x+=5;
                        tag.style.right = x + 'px';
                        if(x>900){
                            clearInterval(timer);
                            tag.remove();
                        }
                    }, 30);
                    tag.onmouseenter = function(){
                        clearInterval(timer);
                    }
                    tag.onmouseleave = function(){
                        timer = setInterval(() => {
                            x+=5;
                            tag.style.right = x + 'px';
                            if(x>900){
                                clearInterval(timer);
                                tag.remove();
                                console.log('tingle ')
                            }
                        }, 30);
                    }
                }
            })
        }, 1000)
    }
  
    return <div>
        <h1>pili pili ~~~~ 喜洋洋与大灰狼</h1>
        <div className='tvBox' ref={ref}></div>
        <div>电影时长({time}s)</div>
        <div>
            <input className='sendBarrage' value={value}
                onChange = {(e) => { setValue(e.target.value) }}
                onKeyDown = {(e) => {
                    if (e.keyCode === 13) {
                        if(value){
                            setBarrageArr([
                                ...barrageArr,
                                {
                                    text: value,   
                                    addTime: time[0]
                                }
                            ])
                            setValue('')
                        }
                    }
                }}
            />
            <span onClick = {() => {
                if(value){
                    setBarrageArr([
                        ...barrageArr,
                        {
                            text: value,   
                            addTime: time[0]
                        }
                    ])
                    setValue('')
                }
            }}> 发送~</span>
        </div>
    </div>
}