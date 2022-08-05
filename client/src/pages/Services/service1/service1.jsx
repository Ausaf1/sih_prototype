import React from 'react';
import Faqs from './faqs';
import "./service1.css";

function CreateFaq(faq) {
    return (
        <div className='faqs'>
            <h3 className='faq-question'>{faq.question}</h3>
            <div className='faq-answer'>

                <p><span className='answerText'>{faq.answerText}</span>{faq.answer}</p>
            </div>
        </div>
    )
}


const service1 = () => {
    return (
        <div>
            <h2 className="heading">FREQUENTLY ASKED QUESTIONS
                TO HELP / SIMPLIFY ONLINE SUBMISSION OF APPLICATIONS</h2>
            {Faqs.map(CreateFaq)}
        </div>
    )
}

export default service1;