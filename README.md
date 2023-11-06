# Keyword Extractor using OpenAI API and text-davinci-003

This is a simple keyword extractor built with React and Chakra UI, utilizing the OpenAI API and the text-davinci-003 model. It allows you to extract a list of keywords from a given text input.

## Features

- **Keyword Extraction**: Extract keywords from any text input by utilizing OpenAI's advanced text-davinci-003 model.
- **User-Friendly Interface**: A clean and intuitive user interface built with React and Chakra UI for a seamless experience.
- **Real-time Feedback**: Experience real-time keyword extraction with minimal latency, making it efficient and responsive.

## How to Use

1. **Input Text**: Enter the text from which you want to extract keywords into the text input field.
2. **Extract Keywords**: Click the extraction button, and the OpenAI API will process the text using the text-davinci-003 model.
3. **View Extracted Keywords**: The extracted keywords will be displayed in a modal, formatted with the first letter of each keyword capitalized and separated by commas.

## Setup

To run this application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Obtain an API key from OpenAI and replace `import.meta.env.VITE_OPENAI_API_KEY` with your actual API key in the `App.js` file.
4. Start the development server using `npm run dev`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Simple, modular, and accessible component library for React applications.
- **OpenAI API**: Access OpenAI's powerful language models for text generation and analysis.

## Acknowledgements

Special thanks to OpenAI for providing the incredible text-davinci-003 model, enabling this keyword extractor to function efficiently and accurately.
