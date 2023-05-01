import React, { useState } from 'react';

const emojis = [
  { name: 'Grinning Face', emoji: '😀' },
  { name: 'Smiling Face with Heart-Eyes', emoji: '😍' },
  { name: 'Face with Tears of Joy', emoji: '😂' },
  { name: 'Thinking Face', emoji: '🤔' },
  { name: 'Face with Medical Mask', emoji: '😷' },
  { name: 'Thumbs Up', emoji: '👍' },
  { name: 'Thumbs Down', emoji: '👎' },
  { name: 'Clapping Hands', emoji: '👏' },
  { name: 'Fire', emoji: '🔥' },
  { name: 'Rocket', emoji: '🚀' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleResetClick = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <h1>Emoji Search App</h1>
      <select value={searchTerm} onChange={handleSearchTermChange}>
        {emojis.map(x=><option>{x.name}</option>)}
      </select>
      <div>
        {filteredEmojis.map((emoji, index) => (
          <span key={index}>{emoji.emoji}</span>
        ))}
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
