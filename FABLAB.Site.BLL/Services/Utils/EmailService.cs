using FABLAB.Site.BLL.DTOs;
using MailKit.Security;
using MimeKit.Text;
using MimeKit;
using MailKit.Net.Smtp;

namespace FABLAB.Site.BLL.Services.Utils
{
    public class EmailService : IEmailService
    {
        
        public bool SendEmail(EmailDTO emailDTO)
        {
            try
            {
                var Host = "";
                int Port = 0;
                var UserName = "";
                var Password = "";

                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse(UserName));
                email.To.Add(MailboxAddress.Parse(emailDTO.To));
                email.Subject = emailDTO.Subject;
                email.Body = new TextPart(TextFormat.Html)
                {
                    Text = emailDTO.Content
                };

                using var smtp = new SmtpClient();
                smtp.Connect(Host, Port, SecureSocketOptions.StartTls);

                smtp.Authenticate(UserName, Password);
                smtp.Send(email);
                smtp.Disconnect(true);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
