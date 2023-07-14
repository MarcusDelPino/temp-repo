import React from "react"

import "./styles.css"

// const { post } = props
// const body = props.body
// const id = props.id
// const title = props.title
// const cover = props.cover
export const PostCard = ({ title, body, id, cover }) => (
    <div className="post" >
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{title}</p>
      </div>
    </div>
  )

