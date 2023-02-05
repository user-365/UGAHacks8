import React from 'react';
import SectionHead from '../components/SectionHead';
import { faqs } from './info';
import FAQ from './FAQ';
import './FAQs.css'



const FAQs = () => {

    return (
      <section className="faqs">
        <div className="container faqs__container">
            <div className ="faqs__wrapper">
                {
                    faqs.map(({id, question, answer})=> {
                        return <FAQ key={id} question={question} answer={answer}/>
                    })

                }
            </div>
        </div>
      </section>
    );
  };

  export default FAQs
