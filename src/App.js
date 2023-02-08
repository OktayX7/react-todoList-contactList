import { Routes, Route } from "react-router-dom";
import ContactApp from "./pages/ContactApp";
import TodoApp from "./pages/TodoApp";
import NoMatch from "./pages/NoMatch";
import Layout from "./layout/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoApp />} />
        <Route path="contact-app" element={<ContactApp />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
