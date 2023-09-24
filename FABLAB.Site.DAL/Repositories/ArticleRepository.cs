using FABLAB.Site.DAL.DataContext;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.DAL.Repositories
{
    public class ArticleRepository : IGenericRepository<Article>
    {
        private readonly FabLabDbContext _db;

        public ArticleRepository(FabLabDbContext db)
        {
            _db = db;
        }

        public async Task<bool> Create(Article model)
        {
            try
            {
                _db.Articles.Add(model);
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
                Article Article = _db.Articles.First(a => a.Id == id);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<IQueryable<Article>> GetAll()
        {
            IQueryable<Article> query = _db.Articles;
            return query;
        }
        public async Task<Article> GetById(int id)
        {
            return await _db.Articles.FindAsync(id);
        }
        public async Task<bool> Update(Article model)
        {
            try
            {
                _db.Articles.Update(model);
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
