import React from 'react';
import { useParams } from 'react-router';

export function ColorDetails(){
    let params = useParams();
    console.log(params);
    
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}