import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './'

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

export default function EventListPage() {
    const {token} = useContext(UserContext)
    const [eventList, setEventList] = useState(null)
    
    useEffect(() => {
         fetchEventList()
     }, [])

     function fetchEventList() {
        fetch(EVENT_LIST_URL, {
            headers: {
                "Content-Type":"application/json",
                "Authorzation": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setEventList(data.results)
        })
     }
    return (
        <div>
            <h1>Event List Page</h1>
            {eventList && eventList.map(eventItem => {
                return (
                    <div key={eventItem.id}>
                        <Link to={`eventItem.slug}`}>{eventItem.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}
