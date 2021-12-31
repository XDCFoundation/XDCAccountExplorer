import React from 'react';

const Filters = (props) => {
    const title = props.title || null;
    const items = props.items;
    const value = props.value;

    return (
        <div className="chart-filters">
            { title !== null && <div className="title">Time</div> }
            <div className="items">
                {items.length && items.map(item => {
                    return (
                        <div
                            key={item.value}
                            className={`${value === item.value ? 'selected' : ''}`}
                            onClick={() => props.onSelect(item.value)}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Filters;
