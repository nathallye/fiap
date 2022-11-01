import { Injectable } from "@nestjs/common";
import { google } from "googleapis";
import * as nodemailer from "nodemailer";

@Injectable()
export class EmailService {
  async sendEmail(to: string, subject: string, msg: string, options: object) {

    const clientID = process.env.CLIENT_ID;
    const secretKey = process.env.SECRET_KEY;
    const refreshToken = process.env.REFRESH_TOKEN;
    const redirectURI = "https://developers.google.com/oauthplayground";
    const OAuth2 = google.auth.OAuth2;

    const oauth2Client = new OAuth2(clientID, secretKey, redirectURI);

    oauth2Client.setCredentials({ refresh_token: refreshToken});

    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      logger: false,
      debug: false,
      auth: {
        type: "OAuth2",
        user: "nathallye.bacelar@gmail.com",
        clientID: clientID,
        clientSecret: secretKey,
        refreshToken: refreshToken,
        accessToken
      }
    });

    const mailOptions = {
      from: "nathallyet@gmail.com",
      to: to,
      bcc: "nathallye.bacelar@gmail.com",
      subject: subject,
      html: `
      Enviando e-mail com NodeJS + Gmail + NestJS + OAuth2
      <h1>${msg}</h1>
      Somente especialistas.
      `
    };

    try {
      const result = transporter.sendEmail(mailOptions);

      if (!result.reject) {
        return { message: "Mensagem enviada com sucesso!" };
      } else {
        return { message: result.reject };
      }

    } catch (error) {
      return {message: error.message};
    }
  }
}
