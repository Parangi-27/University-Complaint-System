using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Text.Json.Serialization;

namespace UniComplaint.Models
{
    public class Complaint
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Title { get; set; } = string.Empty;

        [Required]
        public string? Complain { get; set; } = string.Empty;

        public bool resolve { get; set; } = false;
        public int UserId { get; set; }
        public DateTime CreatedDate { get; set; }

        public List<Comment>? Comments { get; set; }
        [JsonIgnore]
        public User? User { get; set; }
    }
}
