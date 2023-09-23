using FABLAB.Site.DAL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services.Utils;
public interface IEmailService
{
    bool SendEmail(EmailDTO emailDTO);
}
