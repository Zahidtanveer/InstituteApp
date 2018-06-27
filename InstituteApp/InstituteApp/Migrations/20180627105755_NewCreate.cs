using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class NewCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_allocatedBatchTeachers_BatchId",
                table: "allocatedBatchTeachers",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_allocatedBatchTeachers_CourseId",
                table: "allocatedBatchTeachers",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_allocatedBatchTeachers_batches_BatchId",
                table: "allocatedBatchTeachers",
                column: "BatchId",
                principalTable: "batches",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_allocatedBatchTeachers_courses_CourseId",
                table: "allocatedBatchTeachers",
                column: "CourseId",
                principalTable: "courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_allocatedBatchTeachers_batches_BatchId",
                table: "allocatedBatchTeachers");

            migrationBuilder.DropForeignKey(
                name: "FK_allocatedBatchTeachers_courses_CourseId",
                table: "allocatedBatchTeachers");

            migrationBuilder.DropIndex(
                name: "IX_allocatedBatchTeachers_BatchId",
                table: "allocatedBatchTeachers");

            migrationBuilder.DropIndex(
                name: "IX_allocatedBatchTeachers_CourseId",
                table: "allocatedBatchTeachers");
        }
    }
}
