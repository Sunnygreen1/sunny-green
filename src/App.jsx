import './index.css';
import Layout from './components/Layout';
import Hero from './components/pages/Home/Hero';
import HowItWorks from './components/pages/Home/HowItWorks';
import Section3 from './components/pages/Home/Section3';
import FAQ from './components/pages/Home/FAQ';
import Process from './components/pages/Home/Process';
import Contact from './components/pages/Home/Contact';
import { useEffect } from 'react';

function App() {

  return (
    <Layout img='https://www.zonnepanelen.net/wp-content/uploads/zonnepanelen-installateur.jpg'>
      <Hero />
    hello
      <div className="container">
        <HowItWorks />
        <Section3 />
        <FAQ />
        <Process />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
