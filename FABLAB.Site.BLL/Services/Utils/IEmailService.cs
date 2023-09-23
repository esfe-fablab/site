using FABLAB.Site.BLL.DTOs;

namespace FABLAB.Site.BLL.Services.Utils;

public interface IEmailService
{
  bool SendEmail(EmailDTO emailDTO);
}
