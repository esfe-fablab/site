using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class ClubRepository : IGenericRepository<Club>
    {
        private readonly FabLabDbContext _db;
        public ClubRepository(FabLabDbContext db)
        {
            _db = db;
        }
        public Task<bool> Create(Club model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<Club>> GetAll()
        {
            IQueryable<Club> query = _db.Clubs;
            return query;
        }
        public Task<Club> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(Club model)
        {
            throw new NotImplementedException();
        }
    }
}
