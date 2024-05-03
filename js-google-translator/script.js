// GET the button#btn
const btn = document.getElementById('btn');

// WHEN btn is click do this
btn.addEventListener('click', function() {
  const textarea = document.getElementById('source');

  async function requestApi(word) {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'RIVUgy5JezmshnQg1m18lShpKJqdp16Gyqqjsnbw26HnoTxRJT',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      },
      body: new URLSearchParams({
        q: word, // (REQUIRED)
        target: 'it', // Italian (REQUIRED)
        source: 'en', // English (Optional)
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      // console.log('result:', result);
      // console.log('result.data', result.data);
      // data -> translations
      const translatedText = result.data.translations[0].translatedText;
  
      console.log('translatedText:', translatedText);
  
      // GET the h1
      const h1 = document.querySelector('h1');
      h1.textContent = `${word}: ${translatedText}`;
      // UPDATE its textContent by translatedText
    } catch (error) {
      console.error(error);
    }
  }

  requestApi(textarea.value);
})
//   ON CLICK of the button
//   ADD event listener
//      GET the value of textarea#source
//      CALL requestApi with the value



// requestApi('Good Morning');
