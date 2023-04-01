using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UniComplaint.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
       
        public int c_id { get; set; }
        public Complaint? Complaint { get; set; }   

    }
}
