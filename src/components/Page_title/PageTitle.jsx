import React from 'react'
import "./title.css"
import "../../assets/css/media_query.css"
const PageTitle = ({title,color,FontSize,StrokeWidth}) => {
  return (
    <div className='container'>
       <div className='title_wrapper'>
       <h2 style={{fontSize:FontSize,WebkitTextStrokeWidth:StrokeWidth}}>{title}</h2>
       </div>
    </div>
  )
}

export default PageTitle