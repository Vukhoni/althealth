import React,{useState, useEffect} from 'react';

const BirthDays = () =>{
    const [birthDays, SetBirthDay] = useEffect([],[]);

    return (
        <ul className="list-group">
            {
                birthDays.map((birthday) =>{
                    <li className="list-group-item" key={birthday}>{birthday}</li>
                })
            }

        </ul>
    )
}

export default BirthDays;