import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="text-center mt-12">
      <p className="text-4xl font-extrabold text-white mb-8">
        Frequently Asked <span className="app-logo">Questions</span>
      </p>
      <div className="space-y-2">
        <Accordion
          title="What is Fantasy Sport ?"
          content="Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches."
        />
        <Accordion
          title="How to play on Fantasy XI ?"
          content="Upon arriving at our website's welcoming homepage, your journey begins. Navigate gracefully through our intuitive navbar and find yourself drawn to the promising allure of 'Predict'. There, amidst a seamless blend of design and functionality, a form awaits your input. Share with us the essence of the current match, and with a simple click of 'Predict Probability', embark on an exhilarating voyage. Witness the magic unfold as our sophisticated ML model gracefully weaves its predictive prowess, unveiling a tapestry of insights and probabilities right before your eyes. It's not just a prediction; it's a glimpse into the future, brought to life on your screen."
        />
        
      </div>
    </div>
  );
};

export default Faq;
