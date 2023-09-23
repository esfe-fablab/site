using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class ArticleState
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();
}
