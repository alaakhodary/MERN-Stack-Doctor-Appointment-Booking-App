const Contact = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet
          qui corrupti iste!
        </p>

        <form onSubmit={submitHandler} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment...."
              className="form__input mt-1"
              required
            />
          </div>
          <button className="btn rounded sm:w-fit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
