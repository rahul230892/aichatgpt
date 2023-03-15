    import React from 'react'
    
    export default function Translation({setInput, doStuff, result, optionId }) {
      return (<>
            <div>
                <textarea className="text-area" cols={40} rows={10} onChange={(e) => setInput(e.target.value)}></textarea> 
            </div>
            <div>
                <button className='action-btn' onClick={() => doStuff(optionId)}>DO YOUR STUFF!!</button>
            </div>
            <div>
                {optionId === 'q&a' && <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>}
                {optionId === 'imageGeneration' && <img className='ai-image' src={result} alt='Random'></img>}
            </div>
        </>       
      )
    }
    