using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace StudentCourse.Data.Models
{
    public partial class Students
    {
        public Students()
        {
            Courses = new HashSet<Courses>();
        }

        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Courses> Courses { get; set; }
    }
}
