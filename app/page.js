import styles from './styles.module.css'


export default function Home() {
    return (

        <>
            <section className={`${styles.containerHome}`}>
                <section className={`${styles.containerHome2}`}>
                    <img className={`${styles.imgHome}`} src="/img/alura-logo.svg"></img>



                    <p className={`${styles.pHome}`}><span className={`${styles.spanHome}`}> O que tem de novo?</span> Confira as principais dúvidas </p>

                    <h1 className={`${styles.tituloHome}`}>ALURA CASES</h1>
                    <p className={`${styles.pHome2}`}>Aqui você vai ter acesso a discussões avançadas: as principais
                        decisões sobre arquitetura e design de sistemas. Aprenda através
                        das descobertas que as principais empresas de tecnologia enfrentam!
                        <br></br> <br></br>Quer testar antes de todo mundo?
                    </p>
                    <div className={`row g-3 align-items-center `}>
                       
                        <div className={`col-auto ${styles.divInput}`}>
                          
                            <input type="text" id="texto" placeholder='Coloque seu Email aqui' className={`form-control ${styles.inputHome}`} aria-labelledby="passwordHelpInline"/>
                            
                           
                            <button type="button" className={`btn btn-primary ${styles.buttonHome}`}>Cadastrar</button>
                           
                         </div>
                        </div>
                </section>

                <section>

                    <img className={`${styles.imgHome2}`} src='/img/alura-cases.png' height={'500px'}></img>

                </section>

            </section>
        </>


    )


}