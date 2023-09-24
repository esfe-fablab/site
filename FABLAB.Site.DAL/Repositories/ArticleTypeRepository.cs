using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class ArticleTypeRepository : IGenericRepository<ArticleType>
    {
        private readonly FabLabDbContext _db;
        public ArticleTypeRepository(FabLabDbContext db)
        {
            _db = db;
        }
        public Task<bool> Create(ArticleType model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IQueryable<ArticleType>> GetAll()
        {
            return _db.ArticleTypes;
        }

        public Task<ArticleType> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(ArticleType model)
        {
            throw new NotImplementedException();
        }
    }
}
