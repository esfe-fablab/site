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

        [HttpPost]
        public async Task<IActionResult> Insertar([FromBody] ArticleSchema.Create articleDTO)
        {
            var newArticle = new Article
            {
                Title = articleDTO.Title,
                Content = articleDTO.Content,
                Description = articleDTO.Description,
                Keywords = articleDTO.Keywords,
                ArticleStateId = articleDTO.ArticleStateId,
                ArticleTypeId = articleDTO.ArticleTypeId,
                SystemUserId = articleDTO.SystemUserId
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
