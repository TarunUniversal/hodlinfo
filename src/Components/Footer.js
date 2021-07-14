import React from 'react';
import Button from '@material-ui/core/Button';

function Footer() {
    return (
        <div style={{display:'flex', backgroundColor:'#191d28', position:'sticky',left:'0', bottom:'0',zIndex:"8", width:'100%', height:'45px', justifyContent:'center'}}>
            <Button variant="outlined" color="primary" style={{color:'rgb(61, 198, 193)', margin:'5px', textTransform:'none'}} >Add hodlinfo to home screen</Button>
        </div>
    )
}

export default Footer
