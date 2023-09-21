import { memo } from "react"
import  Button  from "@mui/material/Button"

interface ClearBtnProps {
    disabled: boolean;
    onClear: ()=>void
}

export const ClearBtn = memo(({disabled, onClear} :ClearBtnProps)=>{

    return <Button 
    data-testid="clear-btn"
    disabled={disabled}
    style={{ textTransform: 'none', color: '#626262ab',fontSize: 'medium' }} 
    variant="text" 
    onClick={onClear}>
        Clear completed
        </Button>
}) 