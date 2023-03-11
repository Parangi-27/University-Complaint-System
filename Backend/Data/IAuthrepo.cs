using UniComplaint.Models;

namespace UniComplaint.Data
{
    public interface IAuthrepo
    {
        Task<int> Register(User user, string password);
        Task<string> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
