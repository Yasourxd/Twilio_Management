import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader'



export default function MainLoading(props){
    return(
        <div style={{height:"90vh", width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <RiseLoader 
            sizeUnit={"px"}
            size={props.size}
            color={'#2ecc71'}
        />
        </div>
    )
}