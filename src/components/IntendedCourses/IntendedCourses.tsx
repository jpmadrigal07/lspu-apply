import React, {useState} from 'react'
import EditIntendedCourses from './subpage/EditIntendedCourses'
import Information from './subpage/Information'


const IntendedCourses = () => {
  const [isEditState, setIsEditState] = useState(false)
    return (
        <>
          {!isEditState ? <Information setIsEditState={(res: boolean) => setIsEditState(res)} /> : <EditIntendedCourses setIsEditState={(res: boolean) => setIsEditState(res)} />}
        </>
    )
}

export default IntendedCourses
