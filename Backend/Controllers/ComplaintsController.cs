using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniComplaint.Models;

namespace UniComplaint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComplaintsController : ControllerBase
    {
        private readonly ComplaintDbContext _context;

        public ComplaintsController(ComplaintDbContext context)
        {
            _context = context;
        }

        // GET: api/Complaints
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Complaint>>> GetComplaints()
        {
          if (_context.Complaints == null)
          {
              return NotFound();
          }
            return await _context.Complaints.ToListAsync();
        }

        // GET: api/Complaints/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Complaint>> GetComplaint(int id)
        {
          if (_context.Complaints == null)
          {
              return NotFound();
          }
            var complaint = await _context.Complaints.FindAsync(id);

            if (complaint == null)
            {
                return NotFound();
            }

            return complaint;
        }
        // get complain by user id
        [AllowAnonymous]
        [HttpGet("/Complaints/{id}")]
        public async Task<ActionResult<IEnumerable<Complaint>>> GetComplaintById(long id)
        {
            return await _context.Complaints.Where(x => x.UserId == id).ToListAsync();
        }
        // PUT: api/Complaints/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComplaint(int id, Complaint complaint)
        {
            if (id != complaint.Id)
            {
                return BadRequest();
            }

            _context.Entry(complaint).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComplaintExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Complaints
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Complaint>> PostComplaint(Complaint complaint)
        {
          if (_context.Complaints == null)
          {
              return Problem("Entity set 'ComplaintDbContext.Complaints'  is null.");
          }
            _context.Complaints.Add(complaint);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComplaint", new { id = complaint.Id }, complaint);
        }

        // DELETE: api/Complaints/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComplaint(int id)
        {
            if (_context.Complaints == null)
            {
                return NotFound();
            }
            var complaint = await _context.Complaints.FindAsync(id);
            if (complaint == null)
            {
                return NotFound();
            }

            _context.Complaints.Remove(complaint);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComplaintExists(int id)
        {
            return (_context.Complaints?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
