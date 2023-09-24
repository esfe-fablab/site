using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FABLAB.Site.BLL.DTOs
{
    public class ArticleDTO
    {
        public int Id { get; set; }

        public string Title { get; set; } = null!;

        public string Content { get; set; } = null!;

        public string? Description { get; set; }

        public string? Keywords { get; set; }

        public string ArticleState { get; set; }

        public string ArticleType { get; set; }
    }
}
