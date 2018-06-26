using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class newupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SyllabusName",
                table: "courses",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AttendanceType",
                table: "courses",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "allocatedBatchTeachers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BatchId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    TeacherId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_allocatedBatchTeachers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "syllabus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_syllabus", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_courses_SyllabusName",
                table: "courses",
                column: "SyllabusName");

            migrationBuilder.AddForeignKey(
                name: "FK_courses_syllabus_SyllabusName",
                table: "courses",
                column: "SyllabusName",
                principalTable: "syllabus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_courses_syllabus_SyllabusName",
                table: "courses");

            migrationBuilder.DropTable(
                name: "allocatedBatchTeachers");

            migrationBuilder.DropTable(
                name: "syllabus");

            migrationBuilder.DropIndex(
                name: "IX_courses_SyllabusName",
                table: "courses");

            migrationBuilder.DropColumn(
                name: "AttendanceType",
                table: "courses");

            migrationBuilder.AlterColumn<string>(
                name: "SyllabusName",
                table: "courses",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
