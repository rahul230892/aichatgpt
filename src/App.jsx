import './App.css';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './components/AIOptions';
import Translation from './components/Translation';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import SpeechToText from './components/SpeechToText';

function App() {

  const [option, setOption] = useState({})
  const [input, setInput] = useState("")
  const [result, setResult] = useState('')
  const [optionId, setOptionId] = useState('')
  const [error, setError] = useState('')

  const { REACT_APP_OPENAI_API_KEY } = process.env;

  const configuration = new Configuration({
    apiKey: REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  //console.log('OPENAI_API_KEY', import.meta.env.OPENAI_API_KEY)

  const selectOption = (option) => {
    setOption(option)
  }

  const doStuff = async (optionValue) => {
    if(input === '' || input.length < 1 || !input) {
      setError('Please enter some value')
      return false
    }

    let object = {...option, prompt: input}

    if(optionValue === 'q&a') { 
      try {
        const response = await openai.createCompletion(object)
        setResult(response.data.choices[0].text)
      } catch(error){
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          setError(error.response.data.error.message)
        } else {
          console.log(error.message);
          setError(error.message)
        }
      }
      
    }

    if(optionValue === 'imageGeneration') {
      try {
        const response = await openai.createImage(object);
        setResult(response.data.data[0].url)
      } catch (error) {
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          setError(error.response.data.error.message)
        } else {
          console.log(error.message);
          setError(error.message)
        }
      }
    }
    
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 && <OptionSelection arrayItems={arrayItems} selectOption={selectOption} setOptionId={setOptionId}/>}
      {optionId === 'imageGeneration' && <Translation doStuff={doStuff} setInput={setInput} result={result} optionId={optionId} error={error}/>}
      {optionId === 'q&a' && <Translation doStuff={doStuff} setInput={setInput} result={result} optionId={optionId} error={error}/>}
      {optionId === 'speechtotext' && <SpeechToText />} 
    </div>
  );
}

export default App;
