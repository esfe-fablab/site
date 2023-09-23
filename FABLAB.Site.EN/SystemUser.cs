using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class SystemUser
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int RolId { get; set; }

    public int? ClubId { get; set; }

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();

    public virtual Club? Club { get; set; }

    public virtual Rol Rol { get; set; } = null!;
}
