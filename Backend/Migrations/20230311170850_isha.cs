using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Migrations
{
    /// <inheritdoc />
    public partial class isha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaint_Users_userId",
                table: "Complaint");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Complaint",
                table: "Complaint");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UID",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Complaint",
                newName: "Complaints");

            migrationBuilder.RenameColumn(
                name: "UserType",
                table: "Users",
                newName: "UserName");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Complaints",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "cType",
                table: "Complaints",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "cDes",
                table: "Complaints",
                newName: "Complain");

            migrationBuilder.RenameIndex(
                name: "IX_Complaint_userId",
                table: "Complaints",
                newName: "IX_Complaints_UserId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Complaints",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Complaints",
                table: "Complaints",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaints_Users_UserId",
                table: "Complaints",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaints_Users_UserId",
                table: "Complaints");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Complaints",
                table: "Complaints");

            migrationBuilder.RenameTable(
                name: "Complaints",
                newName: "Complaint");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "UserType");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Complaint",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Complaint",
                newName: "cType");

            migrationBuilder.RenameColumn(
                name: "Complain",
                table: "Complaint",
                newName: "cDes");

            migrationBuilder.RenameIndex(
                name: "IX_Complaints_UserId",
                table: "Complaint",
                newName: "IX_Complaint_userId");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UID",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<int>(
                name: "userId",
                table: "Complaint",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Complaint",
                table: "Complaint",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaint_Users_userId",
                table: "Complaint",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
