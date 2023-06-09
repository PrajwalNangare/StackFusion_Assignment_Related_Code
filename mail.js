//const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'put-your-API-key',
        domain: 'put-your-sand-box-domain-from-mailgun'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, phonenumber, dateofbirthcb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'abc@gmail.com',
        subject: subject,
        text: text,
        phonenumber: phonenumber,
        dateofbirth: dateofbirth
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;
