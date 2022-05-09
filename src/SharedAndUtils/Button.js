import React from 'react'

export default function Button({ classes, children }) {
    return (
        <button class={`${classes} btn btn-primary uppercase text-white bg-gradient-to-l from-primary to-secondary`}>{children}</button>

    )
}
