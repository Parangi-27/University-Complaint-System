using System.ComponentModel.DataAnnotations;

namespace UniComplaint.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public int c_id { get; set; }
        public string CommentDes { get; set; }
    }
}
