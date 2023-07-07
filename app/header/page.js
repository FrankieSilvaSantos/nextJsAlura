import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {

    return(

        <section>
         <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.containerNav}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='/img/alura-logo.svg'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse  ${styles.linkPositioning}`}  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link active ${styles.anchorStyle}`} aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${styles.anchorStyle}`} href="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${styles.anchorStyle}`} href="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${styles.anchorStyle}`} href=''>Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </section>

    )
}