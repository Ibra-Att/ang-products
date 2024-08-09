﻿namespace AngulartrainingAPI.DTO.User
{
    public class UpdateUserDTO
    {
        public int Id { get; set; }
        public string? FullName { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? Phone { get; set; } = string.Empty;
        public string? ProfileImage { get; set; } = string.Empty;
        public DateTime? BirthDate { get; set; }

    }
}