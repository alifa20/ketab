require("dotenv").config();
const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  MAILGUN_URL,
  FROM_EMAIL_ADDRESS,
  CONTACT_TO_EMAIL_ADDRESS,
} = process.env;
const mailgun = require("mailgun-js")({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN,
  url: MAILGUN_URL,
});

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
        headers: { Allow: "POST" },
      };
    }

    const data = JSON.parse(event.body);

    if (!data.email || !data.books || !data.name) {
      return {
        statusCode: 422,
        body: "books, email and name are required.",
      };
    }

    const bookNames = (data.books || []).map(
      (book) => `${book.item.frontmatter.title}  ---- price: N/A`
    );

    const mailgunData = {
      from: FROM_EMAIL_ADDRESS,
      to: CONTACT_TO_EMAIL_ADDRESS,
      "h:Reply-To": data.email,
      subject: `New Book order from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${
        data.email
      }\nBooks: \n--------\n${bookNames.join("\r\n")} \n--------\n Message: ${
        data.message
      }`,
    };

    await mailgun.messages().send(mailgunData);
    return {
      statusCode: 200,
      body: "Your book order was sent successfully! We'll be in touch.",
    };
  } catch (err) {
    return {
      statusCode: 422,
      body: `Error: ${err}`,
    };
  }
};
