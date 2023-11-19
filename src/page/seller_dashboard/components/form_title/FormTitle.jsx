import React from 'react'

const FormTitle = ({ size, color, text, textstyle, fontFamily, letterspacing, pt, pr, pb, pl }) => {
    return (
        <div className="form_title" style={{ paddingTop: pt, paddingRight: pr, paddingBottom: pb, paddingLeft: pl }}>
            <h3 style={{ fontSize: size, color: color, textTransform: textstyle, fontFamily: fontFamily, letterSpacing: letterspacing }}>{text}</h3>
        </div>
    )
}

export default FormTitle