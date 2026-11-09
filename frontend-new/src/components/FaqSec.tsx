import { useState } from "react";
import faqData from "../data/faqData.json";
import FaqPlus from "../assets/images/faq/plus.png";
import ClosePlus from "../assets/images/faq/close-plus.png";

// Type for single FAQ item
interface FAQItem {
    question: string;
    answer: string;
}

const FaqSec = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqData.map((item: FAQItem, index: number) => (
                <div
                    className={`faq-item sepatrat-faq ${activeIndex === index ? "active" : ""}`}
                    key={item.question} 
                >
                    {/* Question */}
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <p className={activeIndex === index ? "active-text" : ""}>
                            {item.question}
                        </p>

                        <div className="closed-data">
                            <img
                                src={FaqPlus}
                                alt="plus"
                                className={`data-open-faq ${activeIndex === index ? "hide" : ""}`}
                            />

                            <img
                                src={ClosePlus}
                                alt="close"
                                className={`data-close-faq ${activeIndex === index ? "show" : ""}`}
                            />
                        </div>
                    </div>

                    {/* Line */}
                    <div className={`line-faq ${activeIndex === index ? "show-line" : ""}`}></div>

                    {/* Answer */}
                    <div className={`faq-answer ${activeIndex === index ? "show-answer" : ""}`}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSec;
