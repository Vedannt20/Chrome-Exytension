async function translateText(text, targetLanguage) {
    const apiKey = 'YOUR_API_KEY'; 
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        target: targetLanguage
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.data.translations[0].translatedText;
  }
  function captureMessages() {
    const messages = document.querySelectorAll(".message-in .selectable-text span");
    messages.forEach((messageElement) => {
      const originalText = messageElement.innerText;
      translateText(originalText, selectedLanguage).then(translatedText => {
        messageElement.innerText = translatedText;
      });
    });
  }
  const inputBox = document.querySelector("div[contenteditable='true']");
      translateText(messageText, recipientLanguage).then(translatedMessage => {
        inputBox.innerText = translatedMessage;
        document.querySelector('span[data-icon="send"]').click();  // Clicks the send button
      });
  chrome.storage.sync.set({ language: selectedLanguage }, function() {
    console.log('Language preference saved.');
  });
      