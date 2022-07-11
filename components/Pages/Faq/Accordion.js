import React, { useState } from 'react';
import AccordionComp from './AccordionComp';

export default function Accordion() {
  const [index, setIndex] = useState(false);
  const data = [
    {
      id: 1,
      question: 'How late do you deliver?',
      answer: 'Currently we deliver from 9.00 AM to 9.00 PM.',
    },
    {
      id: 2,
      question: 'Why Swadeli?',
      answer:
        'We know you’re busy, so we make shopping effortless. Whatever you need. Whenever. Delivered to you in 15 minutes.',
    },
    {
      id: 3,
      question: 'How do I buy from Swadeli?',
      answer:
        'Simply create an account using the Swadeli app, input your address, choose your items and pay. We’ll be at your door with your needs in 15 minutes!',
    },
    {
      id: 4,
      question: 'How do I pay?',
      answer: 'We utilize an in-app payment gateway. You can choose the payment method of your choice!',
    },
    {
      id: 5,
      question: 'Is the product quality guaranteed?',
      answer:
        'We ensure the quality of our products by assigning a team to do routine quality checks. If our product quality does not meet your expectation, reach out to our Customer Service WhatsApp (+62 8118 9115)',
    },
    {
      id: 6,
      question: 'Does Swadeli deliver to my location?',
      answer: 'Check our current area coverage here. Let us know where we should go next!',
    },
    {
      id: 7,
      question: 'Can I cancel / change an order?',
      answer: 'For now, paid ongoing orders cannot be canceled / changed.',
    },
    {
      id: 8,
      question: 'Can I refund items?',
      answer:
        'We process every complaint you have regarding our items. Send us a picture of proof within 1x24 hours upon your order completion to our Customer Service WhatsApp (+62 8118 9115)',
    },
    {
      id: 9,
      question: 'How do I track my orders?',
      answer: 'For now, addresses inputted for paid ongoing orders cannot be changed.',
    },
    {
      id: 10,
      question: 'Can I change the address for ongoing orders?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.',
    },
    {
      id: 11,
      question: 'Collapsed accordion',
      answer: 'We’re always excited to partner up with you! For more information reach out to us at hello@swadeli.id',
    },
  ];
  return (
    <div className="flex flex-col justify-center h-auto py-12 pt-10 bg-white rounded-xl">
      {data.map((data) => {
        return (
          <AccordionComp
            key={data.id}
            title={data.question}
            id={data.id}
            answer={data.answer}
            index={index}
            setIndex={setIndex}
          />
        );
      })}
    </div>
  );
}
