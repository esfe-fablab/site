using FABLAB.Site.DAL;
using FABLAB.Site.EN;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.Services
{
    public class ReadOnlyService : IReadOnlyService
    {
        private readonly IGenericRepository<Rol> _rolRepo;
        private readonly IGenericRepository<Club> _clubRepo;
        private readonly IGenericRepository<ArticleState> _articleStateRepo;
        private readonly IGenericRepository<ArticleType> _articleTypeRepo;

        public ReadOnlyService(
            IGenericRepository<Rol> rolRepo, 
            IGenericRepository<Club> clubRepo,
            IGenericRepository<ArticleState> articleStateRepo, 
            IGenericRepository<ArticleType> articleTypeRepo)
        {
            _rolRepo = rolRepo;
            _clubRepo = clubRepo;
            _articleStateRepo = articleStateRepo;
            _articleTypeRepo = articleTypeRepo;
        }

        public async Task<IQueryable<ArticleState>> GetArticleStates()
        {
            return await _articleStateRepo.GetAll();
        }

        public async Task<IQueryable<ArticleType>> GetArticleTypes()
        {
            return await _articleTypeRepo.GetAll();
        }

        public async Task<IQueryable<Club>> GetClubs()
        {
            return await _clubRepo.GetAll();
        }

        public async Task<IQueryable<Rol>> GetRols()
        {
            return await _rolRepo.GetAll();
        }
    }
}
