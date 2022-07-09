import React, { useState } from "react";
import AccordionComp from "./AccordionComp";

export default function Accordion() {
  const [index, setIndex] = useState(false);
  const data = [
    {
      id: 1,
      question: "How late do you deliver?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 2,
      question: "Why Swadeli?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 3,
      question: "How do I buy from Swadeli?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 4,
      question: "How do I pay?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 5,
      question: "Is the product quality guaranteed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 6,
      question: "Does Swadeli deliver to my location?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 7,
      question: "Can I cancel / change an order?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 8,
      question: "Can I refund items?",
      answer:
        "Through our platform, we aim to give more room for growth for you, suppliers, and the environment. Our mission is to empower you to own your time, by providing convenience to your daily life. In the process, we also aspire to extend access for suppliers to reach end-consumers and reduce space used up for markets and parking lots.",
    },
    {
      id: 9,
      question: "How do I track my orders?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 10,
      question: "Can I change the address for ongoing orders?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
    {
      id: 11,
      question: "Collapsed accordion",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna vitae dolor blandit gravida. Sed venenatis quam nec congue commodo. Ut semper justo sed enim tempor gravida. Quisque auctor.",
    },
  ];
  return (
    <div className="flex flex-col justify-center rounded-xl h-auto pt-10 py-12 bg-white">
      {data.map((data) => {
        return (
          <AccordionComp
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
