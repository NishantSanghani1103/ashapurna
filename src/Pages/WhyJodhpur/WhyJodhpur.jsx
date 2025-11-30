import React from 'react'
import WhyJodhpurBanner from './WhyJodhpurComponent/WhyJodhpurBanner'
import { useParams } from 'react-router-dom';
import WhyJodhpurContent from './WhyJodhpurComponent/WhyJodhpurContent';

export default function WhyJodhpur() {
     let data = useParams()
    console.log(data);
    return (
        <>
            <WhyJodhpurBanner/>
            <WhyJodhpurContent/>
        </>
    )
}
