using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class Article
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Content { get; set; } = null!;

    public string? Description { get; set; }

    public string? Keywords { get; set; }

    public int ArticleStateId { get; set; }

    public int ArticleTypeId { get; set; }

    public int SystemUserId { get; set; }

    public virtual ArticleState ArticleState { get; set; } = null!;

    public virtual ArticleType ArticleType { get; set; } = null!;

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual SystemUser SystemUser { get; set; } = null!;
}
