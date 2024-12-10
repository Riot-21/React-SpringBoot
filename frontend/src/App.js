import './App.css';
import { useEffect } from 'react';
import { Collapse, Dropdown, initTWE } from "tw-elements";
function App() {


  // Esto es como decirle a React: "Ey, React, inicia TwElements cuando el componente ya esté listo"
  useEffect(() => {
    initTWE({ Collapse, Dropdown }); // Inicializamos TwElements (¡ponemos música!)
  }, []); // El array vacío significa que solo pasa cuando el componente se monta por primera vez


  return (
<>
      
<nav className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_-4px_6px_rgba(0,0,0,0.3)]dark:bg-neutral-700 lg:flex-wrap lg:justify-start sticky top-0 z-50 lg:py-3" data-twe-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between">

    {/* Grupo de elementos a la izquierda */}
    <div className="flex items-center space-x-4 font-bold ml-7  mt-[20px]">
      <a className="text-dark dark:text-white lg:px-2" href="#home" aria-current="page">Mis objetivos!</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Categorias</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Marcas</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Lanzamientos</a>
      
    </div>

    {/* Logo centrado */}
    <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-50">
      <a className="text-neutral-600 dark:text-white" href="#">
        <span className="[&>svg]:w-5">
          <img src="https://nutripoint.com.pe/wp-content/uploads/2023/08/logo-nutripoint.svg" alt="Logo" className="relative  top-[40px] z-50 w-[124px] h-[150px]" />
        </span>
      </a>
    </div>

    {/* Grupo de elementos a la derecha */}
    <div className="flex items-center space-x-4 flex-shrink-0 mr-7 mt-[20px] font-bold">
      <a className="text-dark dark:text-white lg:px-2" href="#home" aria-current="page">Promociones</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Alianzas</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Tiendas</a>
      <a className="text-dark dark:text-white lg:px-2" href="#about">Blog</a>
      {/* Icono 1 */}
      <a className="text-neutral-600 dark:text-white" href="#">
      <span className="[&>svg]:w-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </span>
    </a>
    {/* Icono 2 */}
    <a className="me-4 text-neutral-600 dark:text-white" href="#">
      <span className="[&>svg]:w-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </span>
    </a>
    </div>
  </div>
</nav>














<br/>
{/*Hero section with background image, heading, subheading and button*/}
  <div
    class="relative h-[450px] overflow-hidden bg-[url('https://img.freepik.com/fotos-premium/equipamiento-deportivo-ligero-moderno-gimnasio_1034910-24222.jpg?w=826')] bg-cover bg-[50%] bg-no-repeat">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mb-6 text-5xl font-bold">Heading</h1>
          <h3 class="mb-8 text-3xl font-bold">Subeading</h3>
          <button
            type="button"
            class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Call to action
          </button>
        </div>
      </div>
    </div>
  </div>


  <section id="home">
        <h2>Home</h2>
        <p>Discover the latest trends in web development.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Learn more about our mission and vision.</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <p>Explore the wide range of services we offer.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with us for your next project.</p>
      </section>


 


</> 
  );
}

export default App;