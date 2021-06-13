import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import NotificationComponent from '../../components/Notification/Notification'
import { NOTIFICATION_PAGE } from '../../services/constant'

const Notification = () => {
    
    return (
        <>
            <Navigation currentPage={NOTIFICATION_PAGE} />
            <NotificationComponent />
        </>
    )
}

export default Notification
