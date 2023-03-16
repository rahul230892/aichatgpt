export const arrayItems = [
    {
        name: 'Q&A',
        id: 'q&a',
        description: 'Answer question based on existing knowledge',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: 'Image Generation',
        id: 'imageGeneration',
        description: 'Create an original image through a text prompt',
        option: {
            n: 1,
            size: "256x256"
        }
    },
    {
        name: 'Speech to text',
        id: 'speechtotext',
        description: 'Convert Speech into Text',
        option: {
            prompt: 'Convert speech to text'   
        }
    }
]