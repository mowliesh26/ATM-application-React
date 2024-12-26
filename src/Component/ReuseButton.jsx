import React from 'react'
import { Button } from '@mui/material';

 function ReuseButton({ variant, children, style, onClick ,className}) {
  
    
    return (
        <div>
                
            <Button style={style} onClick={onClick} variant={variant} className={className}>
                {children}
            </Button>
        </div>
    )
}
export default ReuseButton
