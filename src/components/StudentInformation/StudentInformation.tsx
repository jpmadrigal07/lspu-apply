import React, { useState } from 'react'
import EditInformation from './subpage/EditInformation'
import Information from './subpage/Information'

const StudentInformation = () => {
    const [isEditState, setIsEditState] = useState(false)
    return (
        <>
            {!isEditState ? <Information setIsEditState={(res: boolean) => setIsEditState(res)} /> : <EditInformation setIsEditState={(res: boolean) => setIsEditState(res)} />}
        </>
    )
}

export default StudentInformation
 