// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

type Props = {
    text: string;
}

const Button = ({text} :Props) => {
    return(
        <button className="btn btn-primary ">{text}</button>
    )
    
}

export default Button