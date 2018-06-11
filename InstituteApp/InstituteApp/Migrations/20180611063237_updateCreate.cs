using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace InstituteApp.Migrations
{
    public partial class updateCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppAcadamics",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedBy = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    EndMonth = table.Column<string>(nullable: true),
                    EndYear = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    StartMonth = table.Column<string>(nullable: true),
                    StartYear = table.Column<string>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppAcadamics", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppInstitutes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(nullable: true),
                    Admin = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    Fax = table.Column<string>(nullable: true),
                    Languange = table.Column<string>(nullable: true),
                    Mobile = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    TimeZone = table.Column<string>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppInstitutes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppAcadamics");

            migrationBuilder.DropTable(
                name: "AppInstitutes");
        }
    }
}
