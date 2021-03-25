import React from 'react'

export default function Node(props) {
    return (
      <div>
        <div>{props.id}</div>
        <div>{props.value}</div>
      </div>
    );
  }