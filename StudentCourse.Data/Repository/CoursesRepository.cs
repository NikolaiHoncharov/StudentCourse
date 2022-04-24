using StudentCourse.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StudentCourse.Data.Repository
{
    public class CoursesRepository : IRepository<Courses>
    {
        private readonly StudentCourseContext context;

        public IEnumerable<Courses> All => context.Courses.ToList();

        public CoursesRepository(StudentCourseContext context)
        {
            this.context = context;
        }
        public void Add(Courses entity)
        {
            context.Courses.Add(entity);
            context.SaveChanges();
        }

        public void Delete(Courses entity)
        {
            context.Courses.Remove(entity);
            context.SaveChanges();
        }

        public Courses FindById(int Id)
        {
            return context.Courses.FirstOrDefault(e => e.Id == Id);
        }

        public void Update(Courses entity)
        {
            context.Courses.Update(entity);
            context.SaveChanges();
        }

        public IEnumerable<Courses> SearchByStudentID(int Id)
        {
            return context.Courses.Where(e => e.StudentsId == Id);
        }
    }
}
