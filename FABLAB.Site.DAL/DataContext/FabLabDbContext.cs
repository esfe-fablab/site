using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using FABLAB.Site.EN;

namespace FABLAB.Site.DAL.DataContext;

public partial class FabLabDbContext : DbContext
{
    public FabLabDbContext()
    {
    }

    public FabLabDbContext(DbContextOptions<FabLabDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Article> Articles { get; set; }

    public virtual DbSet<ArticleState> ArticleStates { get; set; }

    public virtual DbSet<ArticleType> ArticleTypes { get; set; }

    public virtual DbSet<Club> Clubs { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Like> Likes { get; set; }

    public virtual DbSet<Rol> Rols { get; set; }

    public virtual DbSet<SystemUser> SystemUsers { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Article>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Article__3214EC07C7A2CF50");

            entity.ToTable("Article");

            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Keywords)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Title)
                .HasMaxLength(60)
                .IsUnicode(false);

            entity.HasOne(d => d.ArticleState).WithMany(p => p.Articles)
                .HasForeignKey(d => d.ArticleStateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Article__Article__59FA5E80");

            entity.HasOne(d => d.ArticleType).WithMany(p => p.Articles)
                .HasForeignKey(d => d.ArticleTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Article__Article__5AEE82B9");

            entity.HasOne(d => d.SystemUser).WithMany(p => p.Articles)
                .HasForeignKey(d => d.SystemUserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Article__SystemU__5BE2A6F2");
        });

        modelBuilder.Entity<ArticleState>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ArticleS__3214EC07B6BC0DDF");

            entity.ToTable("ArticleState");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ArticleType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ArticleT__3214EC070D439C7D");

            entity.ToTable("ArticleType");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Club>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Club__3214EC0799123E79");

            entity.ToTable("Club");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Comment__3214EC07DE5B8E5C");

            entity.ToTable("Comment");

            entity.Property(e => e.Content)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.TimeStamp)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Article).WithMany(p => p.Comments)
                .HasForeignKey(d => d.ArticleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Comment__Article__5FB337D6");

            entity.HasOne(d => d.User).WithMany(p => p.Comments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Comment__UserId__5EBF139D");
        });

        modelBuilder.Entity<Like>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Like__3214EC078D6A9317");

            entity.ToTable("Like");

            entity.HasOne(d => d.Article).WithMany(p => p.Likes)
                .HasForeignKey(d => d.ArticleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Like__ArticleId__619B8048");

            entity.HasOne(d => d.User).WithMany(p => p.Likes)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Like__UserId__60A75C0F");
        });

        modelBuilder.Entity<Rol>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Rol__3214EC0756590FF0");

            entity.ToTable("Rol");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SystemUser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SystemUs__3214EC072A668187");

            entity.ToTable("SystemUser");

            entity.Property(e => e.Name)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(60)
                .IsUnicode(false);

            entity.HasOne(d => d.Club).WithMany(p => p.SystemUsers)
                .HasForeignKey(d => d.ClubId)
                .HasConstraintName("FK__SystemUse__ClubI__5DCAEF64");

            entity.HasOne(d => d.Rol).WithMany(p => p.SystemUsers)
                .HasForeignKey(d => d.RolId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__SystemUse__RolId__5CD6CB2B");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC078753852C");

            entity.ToTable("User");

            entity.Property(e => e.Email)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Token)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
