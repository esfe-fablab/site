using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class RolRepository : IGenericRepository<Rol>
    {
        private readonly FabLabDbContext _db;
        public RolRepository(FabLabDbContext db)
        {
            _db = db;
        }
        public Task<bool> Create(Rol model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<Rol>> GetAll()
        {
            IQueryable<Rol> query = _db.Rols;
            return query;
        }

        public Task<Rol> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(Rol model)
        {
            throw new NotImplementedException();
        }
    }
}
