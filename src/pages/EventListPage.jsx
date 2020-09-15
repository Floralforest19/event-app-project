import React from 'react'
import { useHistory } from 'react-router-dom'

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

export default function EventListPage() {
    const {token} = useContext(UserContext)
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
     }
    return (
        <div>
            <h1>Event List Page</h1>
        </div>
    )
}
