namespace to_do_list.Entities
{
    public class Task
    
    { 
        /// <example>0</example>
        public int Id { get; set; }

        /// <example>Leitura</example>
        public string Title { get; set; }

        /// <example>Clean code</example>
        public string Description { get; set; }

        /// <example>pending</example>
        public string Status { get; set; }
        
        
        /// <example>false</example>
        public bool IsDelete { get; set; }
        
        public Task()
        {
            IsDelete = false;
        }
        public void Update(string title, string description, string status)
        {
            Title = title;
            Description = description;
            Status = status;
        }
        public void Delete()
        {
            IsDelete=true;
        }
    }
}
