import React, { useEffect, useState } from 'react';
import './style/Vocabulary.css'

export const Vocabulary = ( ) => {

    const [words, setWords] = useState([]);
    useEffect(()=>{
        getWords();
     },[words])

const getWords=async()=>{
   await fetch("http://proj7.ruppin-tech.co.il/api/TechnicalWords",{
    method: 'GET',
    headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-type': 'application/json'
    },
   }).then(response=>{
        console.log('res.status', response.status);
        return response.json()
   }).then(result=>{
       if(result){
        setWords(result);
           console.log('works')
       }
       else{
           console.log('error')
       }
   })
}
    
    return (
        <>
    <div>
      {words.map((item, index) => (
        <div className="tile">
    {` ${item.word} - ${item.translation} `}
        </div>
      ))}
    </div>
        </>
    );
}