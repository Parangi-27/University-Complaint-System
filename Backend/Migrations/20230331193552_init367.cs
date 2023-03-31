using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniComplaint.Migrations
{
    /// <inheritdoc />
    public partial class init367 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "comment",
                table: "Comment",
                newName: "CommentDes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentDes",
                table: "Comment",
                newName: "comment");
        }
    }
}
