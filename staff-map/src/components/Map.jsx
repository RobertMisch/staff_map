import React, { useEffect, useState } from 'react'
import { useMap, useMapUpdate } from '../contexts/MapContext'
import Node from './Node'

export default function Map() {
    const [staff, staffNode] = useState([])
    const map = useMap()

    useEffect(() => {
        if(map !== undefined){
            staffNode(map)
        }
        console.log(map)
    }, [map])
    // use mapbox or gcp api?
    // scale of map
    return (
        <div>
            map
            {staff.map(item => {
                return <Node key={item.id} id={item.id} value={item.Name} />
            })
            }
        </div>
    );
}