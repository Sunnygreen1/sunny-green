import '.../..//index.css';
function App() {
  return (
    <Layout img='https://www.zonnepanelen.net/wp-content/uploads/zonnepanelen-installateur.jpg'>
      <Hero />
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
