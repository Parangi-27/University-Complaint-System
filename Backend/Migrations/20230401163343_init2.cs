using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniComplaint.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PublishDate",
                table: "Complaints",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "CommentDes",
                table: "Comment",
                newName: "Text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Complaints",
                newName: "PublishDate");

            migrationBuilder.RenameColumn(
                name: "Text",
                table: "Comment",
                newName: "CommentDes");
        }
    }
}
