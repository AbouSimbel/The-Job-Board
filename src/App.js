import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Job from "./components/Job"


function App() {
  return (
    <>
      <Header headerStyle="header" label="The Job Board" />
      <div className="container">
        <Job
          style="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sidney"/>

        <Job
          style="green"
          title="Agent de Securité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"/>

        <Job
          style="yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"/>

        <Job
          style="blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"/>

        <Job
          style="pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"/>

        <Job
          style="red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"/>

          <Job
          style="green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"/>

          <Job
          style="yellow"
          title='CRM and Data Quality Analyst'
          contractType="CDI"
          country="USA"
          city="New York"/>

          <Job
          style="blue"
          title='Infirmier (H/F)'
          contractType="CDI"
          country="France"
          city="Pantin"/>

      </div>
          <Footer />

    </>
  );
}

export default App;

