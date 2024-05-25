import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  'e0f6603eb04f776229eb74cbb09a70b5',
  'a53697a3ad4c586f3b0d04b1fa01fbe7'
);

export const request = mailjet.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: 'elena.shcheglova@gmail.com',
        Name: 'Olena',
      },
      To: [
        {
          Email: 'elena.shcheglova@gmail.com',
          Name: 'Olena',
        },
      ],
      Subject: 'Greetings from Mailjet.',
      TextPart: 'My first Mailjet email',
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: 'AppGettingStartedTest',
    },
  ],
});

// request
//   .then((result) => {
//     console.log(result.body);
//   })
//   .catch((err) => {
//     console.log(err.statusCode);
//   });
