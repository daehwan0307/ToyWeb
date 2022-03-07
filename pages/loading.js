
import Spinning from "../componenents/Spinning"
import { StyledEngineProvider } from '@mui/material/styles';

const loadPage=()=>{
    return(
        
        <div  class= "md" style={{height:'100vh'}}>
        <StyledEngineProvider injectFirst>
            <Spinning />
        </StyledEngineProvider>
    
        </div>
        
    );
    
}
export default loadPage;
