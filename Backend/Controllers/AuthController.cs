using Microsoft.AspNetCore.Mvc;
using Project.Data;
using Project.Models;

namespace BlogPost.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthrepo _authRepo;
        public AuthController(IAuthrepo authRepo)
        {
            _authRepo = authRepo;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(userRegisterDTO userDTO)
        {
            var res = await _authRepo.Register(new User() { UserName = userDTO.Username }, userDTO.Password);
            if (res == 0)
            {
                return BadRequest($"Cannot register {userDTO.Username}");
            }
            return Ok($"User registered successfully!");
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(userLoginDTO userDTO)
        {
            var res = await _authRepo.Login(userDTO.Username, userDTO.Password);
            Console.WriteLine(res);
            if (res == null)
            {
                return BadRequest($"Incorrect username or password!");
            }
            return Ok(new { token = res, status = 200 });
        }
    }
}