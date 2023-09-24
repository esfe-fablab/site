using FABLAB.Site.EN;

namespace FABLAB.Site.UI.Auth;
public class AuthResponse
{
    public string Token { get; set; }
    public bool Result { get; set; }
    public string Message { get; set; }
    public SystemUser User {get;set;}
}