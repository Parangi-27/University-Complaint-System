using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniComplaint.Migrations
{
    /// <inheritdoc />
    public partial class init36 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "cId",
                table: "Comment",
                newName: "c_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "c_id",
                table: "Comment",
                newName: "cId");
        }
    }
}
