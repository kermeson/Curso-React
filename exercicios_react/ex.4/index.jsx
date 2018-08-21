import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

ReactDOM.render(
    <Family lastName="Martins">
        <Member name="Kermeson"  />
        <Member name="Karina"  />
    </Family>, document.getElementById('app'))