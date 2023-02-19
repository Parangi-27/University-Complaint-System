using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.Models
{
    public class Complaint
    {
        [Key]
        public int uId { get; set; }

        [Required]
        public string cType { get; set; }
        [Required]
        public string cDes { get; set; }
    }
}
