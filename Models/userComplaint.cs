using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.Models
{
    public class userComplaint
    {
        [ForeignKey("Complaint")]
        public int cId { get; set; }

        [ForeignKey("UserProfile")]
        public int uId { get; set; }
    }
}
