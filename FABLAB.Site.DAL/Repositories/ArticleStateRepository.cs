using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class ArticleStateRepository : IGenericRepository<ArticleState>
    {
        private readonly FabLabDbContext _db;
        public ArticleStateRepository(FabLabDbContext db)
        {
            _db = db;
        }

        public Task<bool> Create(ArticleState model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<ArticleState>> GetAll()
        {
            return _db.ArticleStates;
        }

        public Task<ArticleState> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(ArticleState model)
        {
            throw new NotImplementedException();
        }
    }
}
