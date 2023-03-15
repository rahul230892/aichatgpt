    import React from 'react'
    
    export default function Translation({setInput, doStuff, result, optionId, error }) {
        

      return (<>
            <button onClick={() =>window.location.reload(false)} className="reset-button"> Back to Selection</button>

            <div>
                <textarea className="text-area" cols={40} rows={10} onChange={(e) => setInput(e.target.value)}></textarea> 
            </div>
            <div>
                <button 
                    className='action-btn' 
                    onClick={() => doStuff(optionId)}
                >
                DO YOUR STUFF!!
                </button>
            </div>
            <div>
                {optionId === 'q&a' && <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>}
                {optionId === 'imageGeneration' && result.length > 0 && <img className='ai-image' src={result} alt='Random'></img>}
            </div>
            <div>
                {error && <span className='error'>{error}</span>}
            </div>
        </>       
      )
    }
    