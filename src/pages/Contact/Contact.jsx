import { Helmet } from 'react-helmet-async';
import contactUs from '../../assets/contact-us.svg';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Prime Palace | Contact with us</title>
      </Helmet>
      <div className="grid container h-[90vh] my-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-600">
              Share your thoughts with us
            </div>
          </div>
          <img src={contactUs} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form noValidate="" className="space-y-6 flex flex-col justify-center">
          <div>
            <label htmlFor="name" className="text-sm">
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Subject
            </label>
            <input type="text" className="w-full p-3 rounded " />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold text-white tracking-wide uppercase rounded bg-[#F85359]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
