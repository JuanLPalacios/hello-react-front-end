import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <Routes>
        <Route
          path="/"
          element={(
            <ul>
              <li><a href="#/greetings">greet me.</a></li>
            </ul>
          )}
        />
        <Route path="/greetings" element={<Greeting />} />
      </Routes>
    </div>
  );
}
