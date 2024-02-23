import React from 'react';

function History  ({ history, loadOperationFromHistory }) {
    return (
        <div>
            <h3>History</h3>
            <ul>
                {history.map((item, index) => (
                    <li key={index} onClick={() => loadOperationFromHistory(item.operation, item.result)}>
                        {item.operation} = {item.result}
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default History;
