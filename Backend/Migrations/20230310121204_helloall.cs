using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Migrations
{
    /// <inheritdoc />
    public partial class helloall : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaint_Users_UserID",
                table: "Complaint");

            migrationBuilder.DropIndex(
                name: "IX_Complaint_UserID",
                table: "Complaint");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Complaint");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Users",
                newName: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Users",
                newName: "ID");

            migrationBuilder.AddColumn<int>(
                name: "UserID",
                table: "Complaint",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Complaint_UserID",
                table: "Complaint",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaint_Users_UserID",
                table: "Complaint",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "ID");
        }
    }
}
