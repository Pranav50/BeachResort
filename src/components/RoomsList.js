import React from 'react'
import Room from './Room'
import Rooms from './Rooms';

export default function RoomsList({rooms}) {
    if(rooms.length === 0) {
        return <div className="empty-search">
        <h3>No Rooms</h3>
    </div>
    } else {
        return <section className="roomsList">
        <div className="roomList-center">
            {
                rooms.map(item => {
                    return <Room key={item.id} room={item}/>
                })
            }
        </div>
    </section>
    }
       
}
