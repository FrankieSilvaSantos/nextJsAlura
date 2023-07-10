'use client'

import React, { useEffect, useState } from 'react';
import styles from './Faq.module.css'

export default function Faq() {

    const [faq, setFaq] = useState([])



    useEffect(() => {
        const faqUrl = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

        fetch(faqUrl)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                // console.log(response)
                setFaq(response)
            })


    }, [])

    return (

        <>

            <h1 className={`${styles.tituloFaq}`}>FAQ</h1>


            <section>


                <ul className={`${styles.listFaq}`}>
                    {faq.map(({ answer, question }) => (
                    
                        <li key={question} className={`${styles.liFaq}`}>

                        <h2>{question}</h2>
                        <p>{answer}</p>

                        </li>
                          

                    ))}
                </ul>
            </section>
        </>

    )

}