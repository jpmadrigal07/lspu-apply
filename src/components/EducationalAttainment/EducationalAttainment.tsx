import React, { useState } from 'react'
import EditEducationalAttainment from './subpage/EditEducationalAttainment'
import Information from './subpage/Information'

const EducationalAttainment = () => {
    const [isEditState, setIsEditState] = useState(false)
    return (
        <>
            {!isEditState ? <Information setIsEditState={(res: boolean) => setIsEditState(res)} /> : <EditEducationalAttainment setIsEditState={(res: boolean) => setIsEditState(res)} />}
        </>
    )
}

export default EducationalAttainment
