import React from 'react'
import s from './Message.module.css'

type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: propsType) {
    return (
        <div className={s.aaa}>
            <img src={props.avatar} className={s.img}/>

            <div className={s.hvostik}/>

            <div className={s.sms}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}> {props.message}</div>
                <div className={s.time}> {props.time}</div>
            </div>
        </div>
    )
}

export default Message
