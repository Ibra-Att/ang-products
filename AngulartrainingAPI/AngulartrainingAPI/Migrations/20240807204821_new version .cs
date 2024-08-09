using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngulartrainingAPI.Migrations
{
    /// <inheritdoc />
    public partial class newversion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "User",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 463, DateTimeKind.Local).AddTicks(5673),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 378, DateTimeKind.Local).AddTicks(6629));

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "User",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "Product",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 462, DateTimeKind.Local).AddTicks(5517),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 378, DateTimeKind.Local).AddTicks(825));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "OrderProduct",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 462, DateTimeKind.Local).AddTicks(2954),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 377, DateTimeKind.Local).AddTicks(9462));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "Order",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 461, DateTimeKind.Local).AddTicks(2372),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 377, DateTimeKind.Local).AddTicks(2996));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "User");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "User",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 378, DateTimeKind.Local).AddTicks(6629),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 463, DateTimeKind.Local).AddTicks(5673));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "Product",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 378, DateTimeKind.Local).AddTicks(825),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 462, DateTimeKind.Local).AddTicks(5517));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "OrderProduct",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 377, DateTimeKind.Local).AddTicks(9462),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 462, DateTimeKind.Local).AddTicks(2954));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "Order",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 7, 15, 17, 16, 3, 377, DateTimeKind.Local).AddTicks(2996),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 8, 7, 23, 48, 20, 461, DateTimeKind.Local).AddTicks(2372));
        }
    }
}
