import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {orginals,action, horror, romance, documentaries, comedy, cartoons} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import Rowposter from './components/Rowposter/Rowposter';
import axios from 'axios'
function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Rowposter url = {orginals}        title =  'Netflix orginals'/>
      <Rowposter url = {action}          title =  'Action' isSmall />
      <Rowposter url = {horror}          title =  'Horror' isSmall />
      <Rowposter url = {romance}         title =  'Romance' isSmall />
      <Rowposter url = {documentaries}   title =  'Documentaries' isSmall />
      <Rowposter url = {comedy}          title =  'Comedy' isSmall />
      <Rowposter url = {cartoons}        title =  'Cartoons' isSmall />

    </div>
  );
}

export default App;
