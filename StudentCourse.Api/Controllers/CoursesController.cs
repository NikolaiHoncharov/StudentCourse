using Microsoft.AspNetCore.Mvc;
using StudentCourse.Data.Models;
using StudentCourse.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentCourse.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IRepository<Courses> contextCourses;

        public CoursesController(IRepository<Courses> contextCourses)
        {
            this.contextCourses = contextCourses;
        }

        [HttpGet]
        public IEnumerable<Courses> Get()
        {
            return contextCourses.All;
        }

        [HttpGet("GetListCoursesByStudentID/{id}")]
        public IEnumerable<Courses> Get(int id)
        {
            return ((CoursesRepository)contextCourses).SearchByStudentID(id);
        }

        //Добавление отпуска 
        [HttpPost]
        public IActionResult Post([FromBody] Courses value)
        {
            if (value != null && value.StartDate.DayOfWeek == DayOfWeek.Monday && value.EndDate.DayOfWeek == DayOfWeek.Friday
                && value.StartDate < value.EndDate
                && !(contextCourses.All.Where(d => d.StudentsId == value.StudentsId)
                .FirstOrDefault(d => d.StartDate <= value.StartDate && d.EndDate >= value.StartDate ||
                    d.StartDate <= value.EndDate && d.EndDate >= value.EndDate) != null))
            {
                contextCourses.Add(value);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPut]
        public IActionResult Put([FromBody] Courses value)
        {
            var t = (value.EndDate - value.StartDate).TotalDays + 3;
            var tempAllCourses = contextCourses.All;
            var nearestDiff = tempAllCourses.Where(d => d.StudentsId == value.StudentsId).Min(date => Math.Abs((date.EndDate - value.StartDate).Ticks));
            var nearest = tempAllCourses.Where(date => date.StudentsId == value.StudentsId && Math.Abs((date.EndDate - value.StartDate).Ticks) == nearestDiff).FirstOrDefault();

            if (nearest != null)
            {
                nearest.EndDate = nearest.EndDate.AddDays(t);
                contextCourses.Update(nearest);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (contextCourses.All.FirstOrDefault(d => d.Id == id) != null)
            {
                var entity = contextCourses.FindById(id);
                contextCourses.Delete(entity);
            }
            else
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
