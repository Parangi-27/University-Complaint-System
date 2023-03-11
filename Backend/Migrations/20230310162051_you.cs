using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Migrations
{
    /// <inheritdoc />
    public partial class you : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaint_Users_UserId",
                table: "Complaint");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Complaint",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Complaint",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Complaint_UserId",
                table: "Complaint",
                newName: "IX_Complaint_userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaint_Users_userId",
                table: "Complaint",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaint_Users_userId",
                table: "Complaint");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Complaint",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Complaint",
                newName: "ID");

            migrationBuilder.RenameIndex(
                name: "IX_Complaint_userId",
                table: "Complaint",
                newName: "IX_Complaint_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaint_Users_UserId",
                table: "Complaint",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
