import React from 'react';
import './App.css';
import PursePage from './component/pursePage/pursePage';
import DepositPage from './component/depositPage/depositPage';
import HistoryPage from './component/historyPage/historyPage';
import Menu from './component/menu/menu';
import { Routes, Route } from 'react-router-dom';
import StoresPage from './component/storesPage/storesPage';
import SaveStores from './component/saveStores/saveStores';
import DocumentationPage from './component/documentationPage/documentationPage';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/DepositPage" element={<DepositPage />} />
        <Route path="/Cripto" element={<PursePage />} />
        <Route path="/SaveStores" element={<SaveStores />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
        <Route path="/StoresPage" element={<StoresPage />} />
        <Route path="/DocumentationPage" element={<DocumentationPage />} />

      </Routes>
      {/* <Menu /> */}
      {/* <DepositPage /> */}
      {/* <HistoryPage /> */}
    </div>
  );
}

export default App;
