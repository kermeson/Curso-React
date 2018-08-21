import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

ReactDOM.render(
    <Family>
        <Member name="Kermeson" lastName="Martins" />
        <Member name="Karina" lastName="Martins" />
    </Family>, document.getElementById('app'))