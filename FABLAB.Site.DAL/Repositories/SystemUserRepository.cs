using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class SystemUserRepository : IGenericRepository<SystemUser>
    {
        private readonly FabLabDbContext _db;

        public SystemUserRepository(FabLabDbContext db)
        {
            _db = db;
        }

        public async Task<bool> Create(SystemUser model)
        {
            try
            {
                _db.SystemUsers.Add(model);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<bool> Delete(int id)
        {
            try
            {
                SystemUser SystemUser = _db.SystemUsers.First(a => a.Id == id);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<IQueryable<SystemUser>> GetAll()
        {
            IQueryable<SystemUser> query = _db.SystemUsers;
            return query;
        }
        public async Task<SystemUser> GetById(int id)
        {
            return await _db.SystemUsers.FindAsync(id);
        }
        public async Task<bool> Update(SystemUser model)
        {
            try
            {
                _db.SystemUsers.Update(model);
                int affectedRows = await _db.SaveChangesAsync();

                // Verificar si al menos una fila se actualizó
                return affectedRows > 0;
            }
            catch
            {
                return false;
            }
        }
    }
}
