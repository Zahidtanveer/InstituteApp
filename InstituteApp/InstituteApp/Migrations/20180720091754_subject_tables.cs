using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class subject_tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "subjects",
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
                    table.PrimaryKey("PK_subjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "assignedSubject",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BatchId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    SubjectId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_assignedSubject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_assignedSubject_batches_BatchId",
                        column: x => x.BatchId,
                        principalTable: "batches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_assignedSubject_courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_assignedSubject_subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "electiveSubjects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BatchId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    StudentId = table.Column<int>(nullable: false),
                    SubjectId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_electiveSubjects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_electiveSubjects_batches_BatchId",
                        column: x => x.BatchId,
                        principalTable: "batches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_electiveSubjects_courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_electiveSubjects_students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_electiveSubjects_subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "subjectAllocation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BatchId = table.Column<int>(nullable: false),
                    CourseId = table.Column<int>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: false),
                    SubjectId = table.Column<int>(nullable: false),
                    TeacherId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subjectAllocation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_subjectAllocation_batches_BatchId",
                        column: x => x.BatchId,
                        principalTable: "batches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_subjectAllocation_courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_subjectAllocation_departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_subjectAllocation_subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_subjectAllocation_employees_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_assignedSubject_BatchId",
                table: "assignedSubject",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_assignedSubject_CourseId",
                table: "assignedSubject",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_assignedSubject_SubjectId",
                table: "assignedSubject",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_electiveSubjects_BatchId",
                table: "electiveSubjects",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_electiveSubjects_CourseId",
                table: "electiveSubjects",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_electiveSubjects_StudentId",
                table: "electiveSubjects",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_electiveSubjects_SubjectId",
                table: "electiveSubjects",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_subjectAllocation_BatchId",
                table: "subjectAllocation",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_subjectAllocation_CourseId",
                table: "subjectAllocation",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_subjectAllocation_DepartmentId",
                table: "subjectAllocation",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_subjectAllocation_SubjectId",
                table: "subjectAllocation",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_subjectAllocation_TeacherId",
                table: "subjectAllocation",
                column: "TeacherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "assignedSubject");

            migrationBuilder.DropTable(
                name: "electiveSubjects");

            migrationBuilder.DropTable(
                name: "subjectAllocation");

            migrationBuilder.DropTable(
                name: "subjects");
        }
    }
}
