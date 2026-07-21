import { Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
    </>
  );
}

export default App;
