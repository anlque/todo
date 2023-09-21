import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTaskListStore } from "../../../app/providers/TaskListProvider";


export function Switcher() {
    const { displayStatus, switchStatus } = useTaskListStore()
    const [alignment, setAlignment] = useState(displayStatus);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
        switchStatus(newAlignment)
      };


    return (
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
            
          <ToggleButton style={{ textTransform: 'capitalize'}} value={'all'}>all</ToggleButton>
          <ToggleButton data-testid="switch-active" style={{ textTransform: 'capitalize'}} value={'active'}>active</ToggleButton>
          <ToggleButton style={{ textTransform: 'capitalize'}} value={'completed'}>completed</ToggleButton>
        </ToggleButtonGroup>
      );
    
}

