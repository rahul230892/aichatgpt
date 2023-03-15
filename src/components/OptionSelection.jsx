import React from 'react'



export default function OptionSelection({arrayItems, selectOption, setOptionId}) {

  return <>
    <h1 className='heading'>React AI App</h1>
        <div className='grid-main'>
            {arrayItems.map((item) => {
                return <div className='grid-child' onClick={() => {selectOption(item.option); setOptionId(item.id) }} key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
            })}
        </div>
  </>
}
