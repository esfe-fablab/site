using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FABLAB.Site.EN;


namespace FABLAB.Site.BLL.Services
{
    public interface ISystemUserService
    {
        Task<bool> Create(SystemUser model);
        Task<bool> Update(SystemUser model);
        Task<bool> Delete(int id);
        Task<IQueryable<SystemUser>> GetAll();
        Task<SystemUser?> GetById(int id);
        Task<SystemUser> Validate(string UserNme, string Password);
    }
}
