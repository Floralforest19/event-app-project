import React from 'react';

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

function App() {

  function login(){
    fetch(LOGIN_URL)
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
