using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniComplaint.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "resolve",
                table: "Complaints",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "resolve",
                table: "Complaints",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");
        }
    }
}
