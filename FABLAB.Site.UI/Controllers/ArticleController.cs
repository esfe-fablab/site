using Microsoft.AspNetCore.Mvc;
using FABLAB.Site.BLL.Services;
using FABLAB.Site.EN;
using FABLAB.Site.BLL.DTOs;
using FABLAB.Site.UI.Schemas;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FABLAB.Site.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _ArticleService;

        public ArticleController(IArticleService ArticleService)
        {
            _ArticleService = ArticleService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<ArticleDTO> articles = await _ArticleService.GetAll();
            return Ok(articles);
        }

        [HttpGet]
        [Route("notice")]
        public async Task<IActionResult> GetNotices()
        {
            List<ArticleDTO> articles = await _ArticleService.GetAll();
            var filter = articles.Where(article => article.ArticleType == "Noticia").ToList();
            return Ok(filter);
        }

        [HttpGet]
        [Route("notice/{title}")]
        public async Task<IActionResult> GetNoticeById(string title)
        {
            title = title.Replace("-", " ");

            List<ArticleDTO> articles = await _ArticleService.GetAll();
            var filter = articles.Where(article => article.ArticleType == "Noticia").ToList();

            var article = filter.FirstOrDefault(a => a.Title.ToLower() == title.ToLower());

            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }


        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] ArticleSchema.Create article)
        {
            var newArticle = new Article
            {
                Title = article.Title,
                Content = article.Content,
                Description = article.Description,
                Keywords = article.Keywords,
                ArticleStateId = article.ArticleStateId,
                ArticleTypeId = article.ArticleTypeId,
                SystemUserId = article.SystemUserId
            };
            bool result = await _ArticleService.Create(newArticle);

            return StatusCode(StatusCodes.Status200OK, new { success = result });
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] int Id)
        {
            bool result = await _ArticleService.Delete(Id);

            return StatusCode(StatusCodes.Status200OK, new { success = result });
        }
    }
}
