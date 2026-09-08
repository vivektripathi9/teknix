// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const closeMobileNav = () => {
  if (typeof document === 'undefined') return;
  if (window.innerWidth >= 992) return;

  const nav = document.getElementById('navbarNav');
  if (!nav || !nav.classList.contains('show') || nav.classList.contains('navbar-closing')) {
    return;
  }

  nav.querySelectorAll('.dropdown-menu.show').forEach((menu) => {
    menu.classList.remove('show');
  });
  document.querySelectorAll('.navbar-toggler').forEach((toggler) => {
    toggler.classList.add('collapsed');
    toggler.setAttribute('aria-expanded', 'false');
  });

  nav.style.height = `${nav.scrollHeight}px`;
  nav.style.overflow = 'hidden';
  nav.classList.add('navbar-closing');
  nav.offsetHeight;
  nav.style.height = '0px';

  const finishClose = (event) => {
    if (event && event.propertyName && event.propertyName !== 'height') return;
    if (!nav.classList.contains('navbar-closing')) return;
    nav.classList.remove('show', 'collapsing', 'navbar-closing');
    nav.style.height = '';
    nav.style.overflow = '';
    nav.removeEventListener('transitionend', finishClose);
  };

  nav.addEventListener('transitionend', finishClose);
  window.setTimeout(() => finishClose(), 450);
};

const handleMobileNavClick = (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href === '#') return;
  closeMobileNav();
};

const Header = () => {
    const router = useRouter();

    useEffect(() => {
      const onRouteChange = () => closeMobileNav();
      router.events.on('routeChangeStart', onRouteChange);
      router.events.on('routeChangeComplete', onRouteChange);
      return () => {
        router.events.off('routeChangeStart', onRouteChange);
        router.events.off('routeChangeComplete', onRouteChange);
      };
    }, [router.events]);

    return (
       <>
       <section className="top-section ">
  <div className="container ">
    <nav className="navbar navbar-expand-lg narbar-dark  py-md-4    fixed-top px-md-5">
      {/* Left-side Menu (visible on large screens) */}
      <div className="d-none d-lg-flex ">
        <ul className="navbar-nav   ">
          <li className="nav-item">
            <Link className="nav-link text-white" href="/">
              HOME
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ELEVATORS
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  href="/optima"
                >
                  Optima 
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/vertix"
                >
                  Vertix
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/greentek"
                >
                  Greentek X2
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/hydratek"
                >
                  Hydratek
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/villa-matek"
                >
                  Villa Matek
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/evo"
                >
                  Evo
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/evo">
              EVO
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ESCALATORS
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  href="/tesc-20"
                >
                  TESC-20
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/tesc-50"
                >
                  TESC-50
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/tmw-15"
                >
                  TMW-15
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SERVICES
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  href="/lifts-service-and-maintenance"
                >
                  SERVICE  &  MAINTAINENCE
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/safety"
                >
                  SAFETY
                </Link>
              </li>
            </ul>
          </li>
         
        </ul>
      </div>
      {/* Center Logo */}
      <Link className="navbar-brand mx-md-auto " href="./">
        <Image src="/img/Web-teknix-logo.svg" alt="Logo" width={150} height={50}  style={{ width: 150,height: '50px'  }} />
      </Link>
      {/* Right-side Menu (hamburger icon for small screens) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        onClick={handleMobileNavClick}
      >
        {/* Right-side Menu */}
        <ul className="navbar-nav ms-auto d-none d-lg-flex pe-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
            >
              ABOUT-US
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  href="/corporate-profile"
                >
                  CORPORATE PROFILE
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/quality-policy"
                >
                  QUALITY POLICY
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/sustainability"
                >
                  SUSTAINABILITY
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              href="/experience-center"
            >
              {" "}
              EXPERIENCE CENTRE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              href="/blog"
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              href="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        {/* Left-side Menu for small screens */}
        <ul className="navbar-nav d-lg-none ">
          <li className="nav-item">
            <Link className="nav-link text-white" href="./">
              HOME
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ELEVATORS
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" href="/optima">
                  Optima
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/vertix">
                  Vertix
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/greentek">
                  Greentek
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/hydratek">
                  Hydratek
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/villa-matek">
                  Villa Matek
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/evo">
                  Evo
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/evo">
              EVO
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ESCALATORS
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" href="/tesc-20">
                  TESC-20
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/tesc-50">
                  TESC-50
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/tmw-15">
                  TMW-15
                </Link>
              </li>
            </ul>
          </li>
         
          
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SERVICES
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  href="lifts-service-and-maintenance"
                >
                  SERVICE  &  MAINTAINENCE
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/safety">
                  SAFETY
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ABOUT-US
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" href="/corporate-profile">
                  CORPORATE PROFILE
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/quality-policy">
                  QUALITY POLICY
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/sustainability">
                  SUSTAINABILITY
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/experience-center">
              {" "}
              EXPERIENCE CENTRE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/blog">
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>

       </>
    );
};

export default Header;
