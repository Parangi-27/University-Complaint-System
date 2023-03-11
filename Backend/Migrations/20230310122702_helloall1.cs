using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Migrations
{
    /// <inheritdoc />
    public partial class helloall1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "userType",
                table: "Users",
                newName: "UserType");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Users",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Users",
                newName: "Id");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Complaint",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Complaint_UserId",
                table: "Complaint",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaint_Users_UserId",
                table: "Complaint",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaint_Users_UserId",
                table: "Complaint");

            migrationBuilder.DropIndex(
                name: "IX_Complaint_UserId",
                table: "Complaint");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Complaint");

            migrationBuilder.RenameColumn(
                name: "UserType",
                table: "Users",
                newName: "userType");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Users",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Users",
                newName: "id");
        }
    }
}
