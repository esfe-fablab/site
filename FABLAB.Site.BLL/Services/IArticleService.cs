using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public interface IArticleService
    {
        Task<bool> Create(Article model);
        Task<bool> Update(Article model);
        Task<bool> Delete(int id);
        Task<IQueryable<Article>> GetAll();
        Task<Article?> GetById(int id);
    }
}
