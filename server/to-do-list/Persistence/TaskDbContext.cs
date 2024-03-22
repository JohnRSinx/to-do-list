using Microsoft.EntityFrameworkCore;
using to_do_list.Entities;

namespace to_do_list.Persistence
{
    public class TaskDbContext : DbContext 
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) { }
        
        public DbSet<Entities.Task> Tasks { get; set; }
    }
   
}


