import React, { useEffect } from 'react'
import OurJourneyBanner from './OurJourneyComponent/OurJourneyBanner'
import OurJourneyDetails from './OurJourneyComponent/OurJourneyDetails'
import AboutUsAbout from '../About/AboutComponent/AboutUsAbout'
import OurJourneyExperience from './OurJourneyComponent/OurJourneyExperience'

export default function OurJourney() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <OurJourneyBanner />
            <OurJourneyDetails/>
            <OurJourneyExperience/>
        </>
    )
}
