using StudentCourse.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StudentCourse.Data.Repository
{
    public class StudentsRepository : IRepository<Students>
    {
        private readonly StudentCourseContext context;

        public IEnumerable<Students> All => context.Students.ToList();

        public StudentsRepository(StudentCourseContext context)
        {
            this.context = context;
        }
        public void Add(Students entity)
        {
            context.Students.Add(entity);
            context.SaveChanges();
        }

        public void Delete(Students entity)
        {
            context.Students.Remove(entity);
            context.SaveChanges();
        }

        public Students FindById(int Id)
        {
            return context.Students.FirstOrDefault(e => e.Id == Id);
        }

        public void Update(Students entity)
        {
            context.Students.Update(entity);
            context.SaveChanges();
        }
    }
}
