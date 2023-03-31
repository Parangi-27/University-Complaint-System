using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniComplaint.Migrations
{
    /// <inheritdoc />
    public partial class init369 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CommentId",
                table: "Complaints",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Complaints_CommentId",
                table: "Complaints",
                column: "CommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaints_Comment_CommentId",
                table: "Complaints",
                column: "CommentId",
                principalTable: "Comment",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaints_Comment_CommentId",
                table: "Complaints");

            migrationBuilder.DropIndex(
                name: "IX_Complaints_CommentId",
                table: "Complaints");

            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Complaints");
        }
    }
}
