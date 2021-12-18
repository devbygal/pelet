import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { wordService } from '../../_services/words.service';

export const List = () => {
  const [words, setWords] = useState(null);

  useEffect(() => {
    wordService.getAllWords().then(x => setWords(x));
  }, []);

  function deleteWord(wordCode) {
    setWords(words.map(x => {
      if (x.wordCode === wordCode) { x.isDeleting = true; }
      return x;
    }));
    wordService.deleteWord(wordCode).then(() => {
      setWords(words => words.filter(x => x.wordCode !== wordCode));
    });
  }

  return (
    <div>
      <h1>מילים</h1>
      <p>כל המילים לניהול בלבד:</p>
      <div >
        <h4>מילים טכניות</h4>
        <Link to="/admin/words/add" className="btn btn-sm btn-success m-1">הוסף מילה</Link>
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead className="thead-courses">
            <tr>
              <th >קוד מילה</th>
              <th>אות</th>
              <th >מילה</th>
              <th>תרגום</th>

              <th></th>
            </tr>
          </thead>
          <tbody className="tbody-courses">
            {words && words.map((word, index) =>
              <tr key={index}>
                <td >{word.wordCode}</td>
                <td >{word.letter}</td>
                <td >{word.word}</td>
                <td >{word.translation}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <Link to={`/admin/words/edit/${word.wordCode}`} className="btn btn-sm btn-primary">ערוך</Link>
                  <button onClick={() => deleteWord(word.wordCode)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={word.isDeleting}>
                    {word.isDeleting
                      ? <span className="spinner-border spinner-border-sm"></span>
                      : <span>מחיקה</span>
                    }
                  </button>
                </td>
              </tr>
            )}
            {!words &&
              <tr>
                <td colSpan={5} className="text-center">
                  <span className="spinner-border spinner-border-lg align-center"></span>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}