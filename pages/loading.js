
import Spinning from "../componenents/Spinning"
import { StyledEngineProvider } from '@mui/material/styles';


export default function loadPage(){
    return(
        
        <div>
        <StyledEngineProvider injectFirst>
            <Spinning />
        </StyledEngineProvider>
        </div>
    );
}