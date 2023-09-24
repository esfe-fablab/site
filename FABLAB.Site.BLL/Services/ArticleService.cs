using FABLAB.Site.DAL;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public class ArticleService
    {
        private readonly IGenericRepository<Article> repo;
        public ArticleService(IGenericRepository<Article> _repo)
        {
            repo = _repo;
        }

        public async Task<bool> Create(Article model)
        {
            return await repo.Create(model);
        }

        public Task<bool> Delete(int id) => repo.Delete(id);

        public Task<IQueryable<Article>> GetAll() => repo.GetAll();

        public async Task<Article?> GetById(int id) => await repo.GetById(id);

        public Task<bool> Update(Article model) => repo.Update(model);

    }
}
