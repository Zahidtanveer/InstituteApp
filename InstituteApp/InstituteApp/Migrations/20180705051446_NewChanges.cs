using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class NewChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_employees_EmployeeId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_guardians_GuardianId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_students_StudentId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_personalDetails_employees_EmployeeId",
                table: "personalDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_personalDetails_students_StudentId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_personalDetails_EmployeeId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_personalDetails_StudentId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_EmployeeId",
                table: "contactDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_GuardianId",
                table: "contactDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_StudentId",
                table: "contactDetails");

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "personalDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "personalDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "contactDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GuardianId",
                table: "contactDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "contactDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_personalDetails_EmployeeId",
                table: "personalDetails",
                column: "EmployeeId",
                unique: true,
                filter: "[EmployeeId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_personalDetails_StudentId",
                table: "personalDetails",
                column: "StudentId",
                unique: true,
                filter: "[StudentId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_EmployeeId",
                table: "contactDetails",
                column: "EmployeeId",
                unique: true,
                filter: "[EmployeeId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_GuardianId",
                table: "contactDetails",
                column: "GuardianId",
                unique: true,
                filter: "[GuardianId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_StudentId",
                table: "contactDetails",
                column: "StudentId",
                unique: true,
                filter: "[StudentId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_employees_EmployeeId",
                table: "contactDetails",
                column: "EmployeeId",
                principalTable: "employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_guardians_GuardianId",
                table: "contactDetails",
                column: "GuardianId",
                principalTable: "guardians",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_students_StudentId",
                table: "contactDetails",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_personalDetails_employees_EmployeeId",
                table: "personalDetails",
                column: "EmployeeId",
                principalTable: "employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_personalDetails_students_StudentId",
                table: "personalDetails",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_employees_EmployeeId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_guardians_GuardianId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_contactDetails_students_StudentId",
                table: "contactDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_personalDetails_employees_EmployeeId",
                table: "personalDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_personalDetails_students_StudentId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_personalDetails_EmployeeId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_personalDetails_StudentId",
                table: "personalDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_EmployeeId",
                table: "contactDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_GuardianId",
                table: "contactDetails");

            migrationBuilder.DropIndex(
                name: "IX_contactDetails_StudentId",
                table: "contactDetails");

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "personalDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "personalDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "contactDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GuardianId",
                table: "contactDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "contactDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_personalDetails_EmployeeId",
                table: "personalDetails",
                column: "EmployeeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_personalDetails_StudentId",
                table: "personalDetails",
                column: "StudentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_EmployeeId",
                table: "contactDetails",
                column: "EmployeeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_GuardianId",
                table: "contactDetails",
                column: "GuardianId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_contactDetails_StudentId",
                table: "contactDetails",
                column: "StudentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_employees_EmployeeId",
                table: "contactDetails",
                column: "EmployeeId",
                principalTable: "employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_guardians_GuardianId",
                table: "contactDetails",
                column: "GuardianId",
                principalTable: "guardians",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_contactDetails_students_StudentId",
                table: "contactDetails",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_personalDetails_employees_EmployeeId",
                table: "personalDetails",
                column: "EmployeeId",
                principalTable: "employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_personalDetails_students_StudentId",
                table: "personalDetails",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
