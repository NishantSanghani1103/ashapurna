import React, { useEffect } from 'react'
import CsrSocialResponsibilityBanner from './CsrSocialResponsibilityComponent/CsrSocialResponsibilityBanner'
import CsrSocialEvents from './CsrSocialResponsibilityComponent/CsrSocialEvents'

export default function CsrSocialResponsibility() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <CsrSocialResponsibilityBanner />
            <CsrSocialEvents/>
        </>
    )
}
