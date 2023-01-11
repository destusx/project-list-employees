import { useState } from 'react';
import './search-panel.css';

const SearchPanel = ({ onUpdateSearch }) => {
    const [term, setLocalTerm] = useState('');

    const onSearch = (e) => {
        const term = e.target.value;
        setLocalTerm(term);
        onUpdateSearch(term);
    };

    return (
        <input
            onChange={onSearch}
            value={term}
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
        />
    );
};

export default SearchPanel;
