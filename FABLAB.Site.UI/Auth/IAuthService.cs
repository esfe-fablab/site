namespace FABLAB.Site.UI.Auth
{
    public interface IAuthService
    {
        Task<AuthResponse> GetToken(AuthRequest auth);
    }
}
