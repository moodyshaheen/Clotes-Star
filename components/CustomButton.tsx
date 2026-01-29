import React from 'react'
import { CustomButtonProps } from '@/types'


function CustomButton({ isDisabled,
    btnType,
    containerStyles,
    textStyles,
    title,
    handleClick
}: CustomButtonProps) {
    return (
        <button
        type={btnType ?? "button"}
        disabled={isDisabled}
        className={`${containerStyles}`}
        onClick={handleClick}
        >
              {title}
        </button>
    )
}

export default CustomButton