import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom"
import CategoriaPage from "./pages/CategoriaPage"
import CategoriaFormPage from "./pages/CategoriaFormPage"
import ProductoPage from "./pages/ProductoPage"
import ProductoFormPage from "./pages/ProductoFormPage"
import { Container, Navbar, Nav } from "react-bootstrap"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/categorias">Mi Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/categorias" />} />
          <Route path="/categorias" element={<CategoriaPage />} />
          <Route path="/categoria/new" element={<CategoriaFormPage />} />
          <Route path="/categoria/edit/:id" element={<CategoriaFormPage />} />
          <Route path="/productos" element={<ProductoPage />} />
          <Route path="/producto/new" element={<ProductoFormPage />} />
          <Route path="/producto/edit/:id" element={<ProductoFormPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App