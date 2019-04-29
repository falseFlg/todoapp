import React from 'react'

const ToDoListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={liStyle}>{label}</span>
}

export default ToDoListItem