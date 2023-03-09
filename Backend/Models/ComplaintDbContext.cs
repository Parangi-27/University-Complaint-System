using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project.Models;

namespace Project.Models
{
    public class ComplaintDbContext:DbContext
    {
        public ComplaintDbContext(DbContextOptions<ComplaintDbContext> options) : base(options) 
        {
        
        }
        public DbSet<UserProfile> Users { get; set; }
        //public DbSet<Complaint> Complaints { get; set; }
        //public DbSet<CompUser> CompUsers { get; set; }

       protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
       {
           optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=UniComplaint;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
       }
        //public DbSet<Complaint> Complaints { get; set; }
        //public DbSet<CompUser> CompUsers { get; set; }

       public DbSet<Project.Models.Complaint> Complaint { get; set; }

    }
}
