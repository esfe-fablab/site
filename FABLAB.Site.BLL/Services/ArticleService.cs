using FABLAB.Site.BLL.DTOs;
using FABLAB.Site.DAL;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public class ArticleService : IArticleService
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

        public async Task<List<ArticleDTO>> GetAll()
        {
            var query = await repo.GetAll();

            List<ArticleDTO> articles = query.Select(a => new ArticleDTO
            {
                Id = a.Id,
                Title = a.Title,
                Content = a.Content, 
                Description = a.Description,
                Keywords = a.Keywords,
                ArticleState = a.ArticleState.Name,
                ArticleType = a.ArticleType.Name

            }).ToList();

            return articles;
        }

        public async Task<Article?> GetById(int id) => await repo.GetById(id);

        public Task<bool> Update(Article model) => repo.Update(model);

    }
}
