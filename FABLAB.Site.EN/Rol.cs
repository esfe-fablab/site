using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class Rol
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<SystemUser> SystemUsers { get; set; } = new List<SystemUser>();
}
