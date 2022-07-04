import React,{Suspense} from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from './pages/About';
import Layout from "./Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';


const Home = React.lazy( () => import("./pages/Home") );
const Packages = React.lazy( () => import("./pages/Packages") );
const Portfolio = React.lazy( () => import("./pages/Portfolio") );
const Contact = React.lazy( () => import("./pages/Contact") );

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contactus" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        </Suspense>
      </Layout>
    </React.Fragment>
  );
}

export default App;
