using System;
using System.Collections.Generic;

namespace FABLAB.Site.EN;

public partial class Comment
{
    public int Id { get; set; }

    public DateTime? TimeStamp { get; set; }

    public string Content { get; set; } = null!;

    public int UserId { get; set; }

    public int ArticleId { get; set; }

    public int? ParentCommentId { get; set; }

    public virtual Article Article { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
