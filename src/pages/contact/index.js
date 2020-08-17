import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // /.netlify/functions/send-contact-email
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": form.getAttribute("name"),
    //     ...this.state,
    //   }),
    // })
    //   .then(() => navigate(form.getAttribute("action")))
    //   .catch((error) => alert(error));

    // try {
    //   await fetch("/.netlify/lambda/send-contact-email", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({
    //       "form-name": form.getAttribute("name"),
    //       ...this.state,
    //     }),
    //   });

    //   alert("Successful!");
    // } catch (err) {
    //   alert(err);
    // }

    fetch("/.netlify/functions/send-contact-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((text) => console.log(text));
  };

  render() {
    return (
      <Layout>
        <div class="contact-area pt-100 pb-100">
          <div class="container">
            <div class="custom-row-2">
              <div class="col-lg-4 col-md-5">
                <div class="contact-info-wrap">
                  <div class="single-contact-info">
                    <div class="contact-icon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div class="single-contact-info">
                    <div class="contact-icon">
                      <i class="fa fa-globe"></i>
                    </div>
                    <div class="contact-info-dec">
                      <p>
                        <a href="#">urname@email.com</a>
                      </p>
                      <p>
                        <a href="#">urwebsitenaem.com</a>
                      </p>
                    </div>
                  </div>
                  <div class="single-contact-info">
                    <div class="contact-icon">
                      <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div class="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-tumblr"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-vimeo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-7">
                <div class="contact-form">
                  <div class="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form
                    className="contact-form-style"
                    id="contact-form"
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <input
                          placeholder="Name*"
                          className="input"
                          type={"text"}
                          name={"contactName"}
                          onChange={this.handleChange}
                          id={"name"}
                          required={true}
                        />
                      </div>
                      <div class="col-lg-6">
                        <input
                          className="input"
                          placeholder="Email*"
                          type={"email"}
                          name={"contactEmail"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                        />
                      </div>
                      <div class="col-lg-12">
                        {/* <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        /> */}
                        <input
                          className="input"
                          placeholder="Subject*"
                          type={"subject"}
                          name={"subject"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                        />
                      </div>
                      <div class="col-lg-12">
                        <textarea
                          placeholder="Your Massege*"
                          className="textarea"
                          name={"message"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
                        />
                        <button class="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p class="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"contactName"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"contactEmail"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
      </Layout>
    );
  }
}
