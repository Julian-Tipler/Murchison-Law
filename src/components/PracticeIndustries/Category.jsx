import React, { useState, useEffect } from 'react'

export default function Category(props) {
    useEffect(() => {
        //fetch specific category based on props
        //use Redux to display that information
        //use fetch(props.searchTerm)
    }, [])

    return (
        <div>
            <div>{props.searchTerm}</div>
            <div>text</div>
        </div>
    )
}
