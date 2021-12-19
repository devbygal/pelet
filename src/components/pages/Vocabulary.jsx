import './style/Vocabulary.css';
import React, { useEffect, useState } from 'react';
import { wordService } from '../_services';

export const Vocabulary = () => {

  const [words, setWords] = useState([]);

  useEffect(() => {
    wordService.getAllWords().then((data) => {
      setWords(data)
    })
  }, [])

  return (
    <div className='words adjust' id='words'>
      <div className='titleWordBank'>
        <h2>אוצר מילים תכניות</h2>
        <p>אוצר המילים של פ.ל.ת מציג לכם מילים שקשורות לעולם הטכנולוגי שחשוב לדעת.</p>
      </div>
      <div className='content'>
        {words.map((word, index) =>
          <div key={index} className='containWords'>
            <div className='wordBox'>
              <h2>{word.word}</h2>
            </div>
            <div className='meaningBox'>
              <h2>{word.translation}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}