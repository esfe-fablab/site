using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;

using FABLAB.Site.EN;
using FABLAB.Site.BLL.Services;

namespace FABLAB.Site.UI.Auth
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _configuration;
        private readonly ISystemUserService _sytemUserServ;

        public AuthService(IConfiguration configuration, ISystemUserService sytemUserServ)
        {
            _configuration = configuration;
            _sytemUserServ = sytemUserServ;
        }

        private string GenerarToken(string idUsuario)
        {

            var key = _configuration.GetValue<string>("JwtSettings:key");
            var keyBytes = Encoding.ASCII.GetBytes(key);

            var claims = new ClaimsIdentity();
            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, idUsuario));

            var credencialesToken = new SigningCredentials(
                new SymmetricSecurityKey(keyBytes),
                SecurityAlgorithms.HmacSha256Signature
                );

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = credencialesToken
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);

            string tokenCreado = tokenHandler.WriteToken(tokenConfig);

            return tokenCreado;
        }

        //private string GenerarRefreshToken()
        //{

        //    var byteArray = new byte[64];
        //    var refreshToken = "";

        //    using (var rng = RandomNumberGenerator.Create())
        //    {
        //        rng.GetBytes(byteArray);
        //        refreshToken = Convert.ToBase64String(byteArray);
        //    }
        //    return refreshToken;
        //}

        //private async Task<AuthResponse> GuardarHistorialRefreshToken(
        //    int idUsuario,
        //    string token,
        //    string refreshToken
        //    )
        //{

        //    var historialRefreshToken = new HistorialRefreshToken
        //    {
        //        IdUsuario = idUsuario,
        //        Token = token,
        //        RefreshToken = refreshToken, 
        //        FechaCreacion = DateTime.UtcNow,
        //        FechaExpiracion = DateTime.UtcNow.AddMinutes(2)
        //    };


        //    await _context.HistorialRefreshTokens.AddAsync(historialRefreshToken);
        //    await _context.SaveChangesAsync();

        //    return new AuthResponse { Token = token, RefreshToken = refreshToken, Resultado = true, Msg = "Ok" };

        //}


        public async Task<AuthResponse> GetToken(AuthRequest auth)
        {
            var usuario_encontrado = await _sytemUserServ.Validate(auth.UserName, auth.Password);

            if (usuario_encontrado == null)
            {
                return await Task.FromResult<AuthResponse>(null);
            }


            string tokenCreado = GenerarToken(usuario_encontrado.Id.ToString());

            //string refreshTokenCreado = GenerarRefreshToken();

            return new AuthResponse() { Token = tokenCreado, Result = true, Message = "Ok", User= usuario_encontrado};

            //return await GuardarHistorialRefreshToken(usuario_encontrado.IdUsuario, tokenCreado, refreshTokenCreado);


        }

        //public async Task<AuthResponse> DevolverRefreshToken(RefreshTokenRequest refreshTokenRequest, int idUsuario)
        //{
        //    var refreshTokenEncontrado = _context.HistorialRefreshTokens.FirstOrDefault(x =>
        //    x.Token == refreshTokenRequest.TokenExpirado &&
        //    x.RefreshToken == refreshTokenRequest.RefreshToken &&
        //    x.IdUsuario == idUsuario);

        //    if (refreshTokenEncontrado == null)
        //        return new AuthResponse { Resultado = false, Msg = "No existe refreshToken" };

        //    var refreshTokenCreado = GenerarRefreshToken();
        //    var tokenCreado = GenerarToken(idUsuario.ToString());

        //    return await GuardarHistorialRefreshToken(idUsuario, tokenCreado, refreshTokenCreado);


        //}
    }
}
