import React from 'react'
import ReactDOM from 'react-dom/client';
const newlist=[1,2,3,4,5,6]
const r1=newlist.map((listvalue)=>{
    return <li>{listvalue}</li>
});
ReactDOM.render(<ul>{rl}</ul>,document.getElementById('root'));