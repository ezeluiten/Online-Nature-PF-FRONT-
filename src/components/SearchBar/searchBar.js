import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function searchBar() {
    const dispatch = useDispatch();
    const [props, setProps] = useState('')

    const handleChange = (e) => {
        setProps(e.target.value);
    }

    const handleSubmit = (e) => {
        if(props.length < 1) return alert('Put something to search')
        e.preventDefault();
        dispatch(getName(props));       
        setProps('');
        setTimeout(() => {currentPage(1)},10);
    }

    
    return (
        <div>
            <input type='text' placeholder='Search...' onChange={(e) => handleChange(e)} value= {props}   />
            &nbsp;
            <button type= "submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}