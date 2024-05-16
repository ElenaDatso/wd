import * as section from './modules';
import 'normalize.css';
import './App.css'

function App() {

  return (
    <>
      <section.CustomHeader></section.CustomHeader>
      {/* <section.HeroSection></section.HeroSection> */}
      <section.ServiceSection></section.ServiceSection>
      <section.QuoteSection></section.QuoteSection>
    </>
  );
}

export default App
