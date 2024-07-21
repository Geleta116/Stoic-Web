import { todaysQuote } from "../frameworks/services/SelectQuote.js";
import { sendEmail } from "../frameworks/utils/EmailSender.js";

function emailController(emailRepository) {
  const AddEmail = (req, res, next) => {
    const { incomingEmail } = req.body;
    console.log(incomingEmail)
    emailRepository
      .findEmail(incomingEmail)
      .then((emailFound) => {
        if (emailFound) {
          return res.status(409).json({ message: "Email already exists." });
        }

        return emailRepository
          .addEmail(incomingEmail)
          .then((response) => {
            res.json(response);
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };

  const SendDailyQuoteToEmails = async (emailRepository) => {
    try {
      const emails = await emailRepository.getAllEmail();

      const subject = `Today's Stoic Quote`;
      const text = `${todaysQuote.quote}\n\n- ${todaysQuote.author}`;

      for (const email of emails) {
        await sendEmail(email.email, subject, text);
        console.log(`Sent quote to: ${email.email}`);
      }
    } catch (error) {
      console.error("Error sending daily quote to emails:", error);
    }
  };

  return { AddEmail, SendDailyQuoteToEmails };
}

export default emailController;
