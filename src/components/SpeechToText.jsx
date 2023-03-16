import { useWhisper } from '@chengsokdara/use-whisper'


const SpeechToText = () => {

    const { REACT_APP_OPENAI_API_KEY } = process.env;

  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: REACT_APP_OPENAI_API_KEY, // YOUR_OPEN_AI_TOKEN
  })

  return (
   <>
     <button onClick={() =>window.location.reload(false)} className="reset-button"> Back to Selection</button>
        <div>
            <p>Recording: {recording}</p>
            <p>Speaking: {speaking}</p>
            <p>Transcribing: {transcribing}</p>
            <p>Transcribed Text: {transcript.text}</p>
            <button onClick={() => startRecording()}>Start</button>
            <button onClick={() => pauseRecording()}>Pause</button>
            <button onClick={() => stopRecording()}>Stop</button>
        </div>
   </>
  )
}

export default SpeechToText