import { useState, useCallback} from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback( e => {
        const {name, value} = e.target;
        setForm(form => ({...form,[name]: value}));
    },[]); //참조 동등성을 위해 useCallback 사용
    
    const reset = useCallback(() => setForm(initialForm),[initialForm]);
    return [form, onChange, reset];
}