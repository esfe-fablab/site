INSERT INTO ArticleType(Name) VALUES ('Guía'), ('Noticia'), ('Proyecto')
INSERT INTO ArticleState(Name) VALUES ('Publicado'), ('Archivado'), ('Pendiente')

INSERT INTO Club(Name) VALUES ('Robótica'), ('Innovación'), ('Comunicación')

INSERT INTO Rol(Name) VALUES ('Admin'), ('Member')

INSERT INTO SystemUser(Name, UserName, Password, RolId, ClubId)
VALUES ('Eliseo', 'admin', '2023', 3, 1)