import React, { useEffect, useState } from 'react';
import './style/Vocabulary.css'

export const Vocabulary = ( ) => {

    const [words, setWords] = useState([]);
    useEffect(()=>{
        getWords();

        return () => {
            console.log("clean-up")
            getWords();
        };
     },[])

const getWords=async()=>{
   await fetch("http://proj7.ruppin-tech.co.il/api/TechnicalWords",{
    method: 'GET',
    headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-type': 'application/json'
    },
   }).then(response=>{
        return response.json()
   }).then(result=>{
       if(result){
        setWords(result);
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
        <div className="tile" key={index}>
    {` ${item.word} - ${item.translation} `}
        </div>
      ))}
    </div>
        </>
    );
}