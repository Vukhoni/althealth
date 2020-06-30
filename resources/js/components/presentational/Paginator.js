import  React, {useState} from 'react';

const Paginator = ({page, first, last, load})=>{
        const [goto, setGoto] = useState(page);
        return(
            <ul className="pagination">
                <li className="page-item">
                    <button
                        type='button'
                        className="page-link"
                        onClick={() =>{load(first);}}
                        disabled={(page===1 || first ===last)}
                    >
                        First
                    </button>
                </li>
                <li className="page-item">
                    <button type='button'  className="page-link" onClick={() =>{load(page-1); }} disabled={(page===1 || first ===last)}>Previous</button>
                </li>
                <li>
                    <div className="input-group mb-3">
                        <input value={goto} type='number' className="form-control" onChange={(e)=>{setGoto(e.target.value)}} aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button type='button' className='form-control' onClick={() =>{load(goto); }}>Go</button>
                        </div>
                    </div>
                </li>
                <li className="page-item">
                    <button
                        type='button'
                        className="page-link"
                        onClick={() =>{load(page+1) }}
                        disabled={(page===last || first ===last)?true: false}
                    >
                        Next
                    </button>
                </li>
                <li className="page-item">
                    <button
                        type='button'
                        className="page-link"
                        onClick={() =>{load(last)}}
                        disabled={(page===last || first ===last)?true: false}
                    >Last</button>
                </li>
            </ul>
        )
}
export default Paginator;