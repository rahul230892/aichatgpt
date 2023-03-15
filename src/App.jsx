import './App.css';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './components/AIOptions';
import Translation from './components/Translation';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function App() {

  const [option, setOption] = useState({})
  const [input, setInput] = useState("")
  const [result, setResult] = useState('')
  const [optionId, setOptionId] = useState('')

  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);

  //console.log('OPENAI_API_KEY', import.meta.env.OPENAI_API_KEY)

  const selectOption = (option) => {
    setOption(option)
  }

  const doStuff = async (optionValue) => {

    let object = {...option, prompt: input}

    if(optionValue === 'q&a') { 
      try {
        const response = await openai.createCompletion(object)
        setResult(response.data.choices[0].text)
      } catch(error){
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          setResult(error.response.data)
        } else {
          console.log(error.message);
          setResult(error.message)
        }
      }
      
    }

    if(optionValue === 'imageGeneration') {
      console.log('object',object)
      try {
        const response = await openai.createImage(object);
        setResult(response.data.data[0].url)
      } catch (error) {
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          setResult(error.response.data)
        } else {
          console.log(error.message);
          setResult(error.message)
        }
      }
    }
    
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 && <OptionSelection arrayItems={arrayItems} selectOption={selectOption} setOptionId={setOptionId}/>}
      {optionId === 'imageGeneration' && <Translation doStuff={doStuff} setInput={setInput} result={result} optionId={optionId}/>}
      {optionId === 'q&a' && <Translation doStuff={doStuff} setInput={setInput} result={result} optionId={optionId}/>} 
    </div>
  );
}

export default App;
