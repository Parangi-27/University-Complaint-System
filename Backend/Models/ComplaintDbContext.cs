using Microsoft.EntityFrameworkCore;
using UniComplaint.Models;

namespace UniComplaint.Models
{
    public class ComplaintDbContext:DbContext
    {
        public ComplaintDbContext(DbContextOptions<ComplaintDbContext> options) : base(options) 
        {
        
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=UniversityComp;Trusted_Connection=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
        public DbSet<User> Users => Set<User>();

        public DbSet<Complaint> Complaints => Set<Complaint>();
        public DbSet<Comment> Comment => Set<Comment>();

        //public DbSet<UniComplaint.Models.Comment>? Comment { get; set; }
    }
}
