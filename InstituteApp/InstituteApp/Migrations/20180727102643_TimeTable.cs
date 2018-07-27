using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class TimeTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "timeTables",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BatchId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    DayOfWeek = table.Column<string>(nullable: true),
                    EndTime = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    StartTime = table.Column<string>(nullable: true),
                    SubjectId = table.Column<int>(nullable: true),
                    TeacherId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_timeTables", x => x.Id);
                    table.ForeignKey(
                        name: "FK_timeTables_batches_BatchId",
                        column: x => x.BatchId,
                        principalTable: "batches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_timeTables_courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_timeTables_subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_timeTables_employees_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_timeTables_BatchId",
                table: "timeTables",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_timeTables_CourseId",
                table: "timeTables",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_timeTables_SubjectId",
                table: "timeTables",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_timeTables_TeacherId",
                table: "timeTables",
                column: "TeacherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "timeTables");
        }
    }
}
