import React, { useEffect } from 'react'
import BannerAbout from './AboutComponent/BannerAbout'
import AboutUsAbout from './AboutComponent/AboutUsAbout'
import AboutFeaturedProjects from './AboutComponent/AboutFeaturedProjects'
import OurMissionVision from './AboutComponent/OurMissionVision'
import OurAchievement from './AboutComponent/OurAchievement'

export default function About() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <BannerAbout />
            <AboutUsAbout />
            <AboutFeaturedProjects />
            <OurMissionVision />
            <OurAchievement/>
        </>
    )
}
