import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({ children }: Props) => {
    return (
        <h1 className='basis-3/5 font-bold text-3xl font-montserrat'>
            {children}
        </h1>
    )
}

export default HText