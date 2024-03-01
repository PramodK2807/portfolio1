import React from 'react';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container mt-4 py-5">
        <div className="contact_container ">
          <div className="row px-5 ">
            <div data-aos="fade-right"  data-aos-duration="2000" className="col-md-6 rounded border bg-light text-dark mb-5 mb-md-0">
              <div className="info_container">
                <h1 className="title_heading">Contact Me</h1>
                <div>
                  <div className="icons">
                    <img src="/images/placeholder.png" alt="" />{' '}
                    <span>Jabalpur, MP, India </span>
                  </div>
                  <div className="icons ">
                    <img src="images/gmail.png" alt="" />{' '}
                    <span>
                      <a
                        className="text-decoration-none text-dark "
                        href="mailto:pramodkushwaha1328@gmail.com">
                        pramodkushwaha1328@gmail.com
                      </a>{' '}
                    </span>
                  </div>
                  <div className="icons">
                    <img src="images/phone.png" alt="" />{' '}
                    <span>6260392809</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left"  data-aos-duration="2000" className="col-md-6">
              <div className="input_container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="mb-1">
                      Name
                    </label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-100"
                        placeholder="Your Name..."
                        {...register('name', {
                          required: '* Name is required',
                          pattern: {
                            value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                            message:
                              'Spaces at the start & numbers are not allowed',
                          },
                        })}
                      />
                      {errors.name && (
                        <span className="text-warning">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="my-3">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email..."
                        className="w-100"
                        {...register('email', {
                          required: '* Email is required',
                        })}
                      />
                      {errors.email && (
                        <span className="text-warning">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="message" className="mb-1">
                      Message
                    </label>
                    <div>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        className="w-100"
                        placeholder="Your Message..."
                        {...register('message', {
                          required: '* Message is required',
                        })}
                      />
                      {errors.message && (
                        <span className="text-warning">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={!isValid}
                    className="w-100 submit_btn animate_btn"
                    type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactMe;
