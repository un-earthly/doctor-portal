import React from 'react'
import Helmet from 'react-helmet'

export default function SetTitle({ pageTitle }) {
    return (

        <Helmet>
            <title>{pageTitle} - Doctors Portal</title>
        </Helmet>
    )
}
