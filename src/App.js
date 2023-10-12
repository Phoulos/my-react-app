import React from 'react';
import Avatar from './Avatar';

function App() {
  const bart = {
    image: 'url_de_l_image_de_bart',
    firstName: 'Bart',
    lastName: 'Simpson',
  };

  const homer = {
    image: 'url_de_l_image_de_homer',
    firstName: 'Homer',
    lastName: 'Simpson',
  };

  return (
    <div>
      <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} />
      <Avatar image={homer.image} firstName={homer.firstName} lastName={homer.lastName} />
    </div>
  );
}

export default App;