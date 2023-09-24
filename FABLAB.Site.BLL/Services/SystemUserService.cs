using FABLAB.Site.DAL;
using FABLAB.Site.EN;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public class SystemUserService : ISystemUserService
    {
        private readonly IGenericRepository<SystemUser> repo;
        public SystemUserService(IGenericRepository<SystemUser> _repo)
        {
            repo = _repo;
        }

        public async Task<bool> Create(SystemUser model)
        {
            return await repo.Create(model);
        }

        public Task<bool> Delete(int id) => repo.Delete(id);

        public Task<IQueryable<SystemUser>> GetAll() => repo.GetAll();

        public async Task<SystemUser?> GetById(int id) => await repo.GetById(id);

        public Task<bool> Update(SystemUser model) => repo.Update(model);

        /// <sumary>
        /// Login de usuario
        /// </sumary>
        public async Task<SystemUser> Validate(string UserName, string Password)
        {
            try
            {
                var SystemUsers = await repo.GetAll();
                var user = await SystemUsers.FirstAsync(a => a.UserName == UserName && a.Password == Password);
                return user;
            }
            catch
            {
                return null;
            }

        }
    }
}
