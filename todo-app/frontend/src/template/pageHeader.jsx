import React from 'react'

export default (props) => (
    <header className="pageheader">
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)