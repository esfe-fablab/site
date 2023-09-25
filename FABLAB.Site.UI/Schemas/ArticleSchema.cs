namespace FABLAB.Site.UI.Schemas
{
    public class ArticleSchema
    {
        public class Create
        {
            public string Title { get; set; } = null!;
            public string Content { get; set; } = null!;
            public string? Description { get; set; }
            public string? Keywords { get; set; }
            public int ArticleStateId { get; set; }
            public int ArticleTypeId { get; set; }
            public int SystemUserId { get; set; }
        }
    }
}
