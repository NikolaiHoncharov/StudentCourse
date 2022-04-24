using Microsoft.AspNetCore.Mvc;
using StudentCourse.Data.Models;
using StudentCourse.Data.Repository;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentCourse.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IRepository<Students> contextStudents;

        public StudentsController(IRepository<Students> contextStudents)
        {
            this.contextStudents = contextStudents;
        }

        // GET: api/<StudentsController>
        [HttpGet]
        public IEnumerable<Students> Get()
        {
            return contextStudents.All;
        }

        // GET api/<StudentsController>/5
        [HttpGet("{id}")]
        public Students Get(int id)
        {
            return contextStudents.FindById(id);
        }

        // POST api/<StudentsController>
        [HttpPost]
        public IActionResult Post([FromBody] Students value)
        {
            if (value != null && contextStudents.All.FirstOrDefault(d => d.Id == value.Id) != null)
            {
                contextStudents.Update(value);
            }
            else
            {
                return BadRequest();
            }
            return Ok();
        }

        // PUT api/<StudentsController>
        [HttpPut]
        public IActionResult Put([FromBody] Students value)
        {
            if (value != null && contextStudents.All.FirstOrDefault(d => d.Email == value.Email) == null)
            {
                contextStudents.Add(value);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<StudentsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (contextStudents.All.FirstOrDefault(d => d.Id == id) != null)
            {
                var entity = contextStudents.FindById(id);
                contextStudents.Delete(entity);
            }
            else
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
