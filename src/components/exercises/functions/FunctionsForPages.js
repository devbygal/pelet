// פונקציות לדף תרגול
export const fillInputs = (st, set1, set2, set3, set4, set5, set6, set7, set8, set9, set10) => {
    let answers = st.split(",");
    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        switch (i) {
            case 0:
                set1(element);
                break;
            case 1:
                set2(element);
                break;
            case 2:
                set3(element);
                break;
            case 3:
                set4(element);
                break;
            case 4:
                set5(element);
                break;
            case 5:
                set6(element);
                break;
            case 6:
                set7(element);
                break;
            case 7:
                set8(element);
                break;
            case 8:
                set9(element);
                break;
            case 9:
                set10(element);
                break;
            default:
                break;
        }
    }
};


export const checkAnswers = (st, input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) => {
    let answers = st.split(",");
    let flag = false;
    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        switch (i) {
            case 0:
                if (element === input1) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 1:
                if (element === input2) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 2:
                if (element === input3) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 3:
                if (element === input4) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 4:
                if (element === input5) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 5:
                if (element === input6) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 6:
                if (element === input7) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 7:
                if (element === input8) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 8:
                if (element === input9) 
                    flag = true;
                 else 
                    return false;
                
                break;
            case 9:
                if (element === input10) 
                    flag = true;
                 else 
                    return false;
                
                break;
            default:
                break;
        }
    }
    return flag;
};

export const addInputs = (st, input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, setInput1, setInput2, setInput3, setInput4, setInput5, setInput6, setInput7, setInput8, setInput9, setInput10) => {
    let arr = [];
    let i = 0;
    for (let index = 0; index < st.length; index++) {
        let element = st[index];
        if (element === "&") {
            arr.push (<br/>)
        } else if (element === "$") {
            i++;
            switch (i) {
                case 1: arr.push (<input value={input1}
                    key={i}
                    type="text"
                    onChange={
                        (e) => {
                            setInput1(e.target.value);
                        }
                    }/>);
                    break;
                case 2: arr.push (<input value={input2}
                    type="text"
                    onChange={
                        (e) => {
                            setInput2(e.target.value);
                        }
                    }/>);
                    break;
                case 3: arr.push (<input value={input3}
                    type="text"
                    onChange={
                        (e) => {
                            setInput3(e.target.value);
                        }
                    }/>);
                    break;
                case 4: arr.push (<input value={input4}
                    type="text"
                    onChange={
                        (e) => {
                            setInput4(e.target.value);
                        }
                    }/>);
                    break;
                case 5: arr.push (<input value={input5}
                    type="text"
                    onChange={
                        (e) => {
                            setInput5(e.target.value);
                        }
                    }/>);
                    break;
                case 6: arr.push (<input value={input6}
                    type="text"
                    onChange={
                        (e) => {
                            setInput6(e.target.value);
                        }
                    }/>);
                    break;
                case 7: arr.push (<input value={input7}
                    type="text"
                    onChange={
                        (e) => {
                            setInput7(e.target.value);
                        }
                    }/>);
                    break;
                case 8: arr.push (<input value={input8}
                    type="text"
                    onChange={
                        (e) => {
                            setInput8(e.target.value);
                        }
                    }/>);
                    break;
                case 9: arr.push (<input value={input9}
                    type="text"
                    onChange={
                        (e) => {
                            setInput9(e.target.value);
                        }
                    }/>);
                    break;
                case 10: arr.push (<input value={input10}
                    type="text"
                    onChange={
                        (e) => {
                            setInput10(e.target.value);
                        }
                    }/>);
                    break;
                default:
                    break;
            }
        } else 
            arr.push(element);
        
    }
    return arr;
};

