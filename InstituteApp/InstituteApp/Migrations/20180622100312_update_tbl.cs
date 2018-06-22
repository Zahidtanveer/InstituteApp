using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class update_tbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "courses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    Dscription = table.Column<string>(nullable: true),
                    MaxAttandencePercentage = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SyllabusName = table.Column<string>(nullable: true),
                    TotalWorkingDays = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_courses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "batches",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CourseId = table.Column<int>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    MaxNumberOfStudent = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SatrtDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_batches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_batches_courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_batches_CourseId",
                table: "batches",
                column: "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "batches");

            migrationBuilder.DropTable(
                name: "courses");
        }
    }
}
