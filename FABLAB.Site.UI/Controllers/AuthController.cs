using FABLAB.Site.UI.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FABLAB.Site.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }


        [HttpPost]
        [Route("get")]
        public async Task<IActionResult> Autenticar([FromBody] AuthRequest autorizacion)
        {
            var resultado_autorizacion = await _authService.GetToken(autorizacion);
            if (resultado_autorizacion == null)
                return Unauthorized();

            return Ok(resultado_autorizacion);

        }

        [Authorize]
        [HttpPost]
        [Route("verify")]
        public async Task<IActionResult> Ping()
        {
            return Ok(true);
        }
    }
}
