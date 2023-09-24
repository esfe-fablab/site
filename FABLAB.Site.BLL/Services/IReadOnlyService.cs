using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public interface IReadOnlyService
    {
        Task<IQueryable<Club>> GetClubs();
        Task<IQueryable<Rol>> GetRols();
        Task<IQueryable<ArticleType>> GetArticleTypes();
        Task<IQueryable<ArticleState>> GetArticleStates();
    }
}
