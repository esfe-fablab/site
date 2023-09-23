using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class Like
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int ArticleId { get; set; }

    public virtual Article Article { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
