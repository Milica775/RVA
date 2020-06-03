DROP TABLE IF EXISTS klijent CASCADE;
DROP TABLE IF EXISTS racun CASCADE;
DROP TABLE IF EXISTS kredit CASCADE;
DROP TABLE IF EXISTS tip_racuna CASCADE;

DROP SEQUENCE IF EXISTS klijent_seq;
DROP SEQUENCE IF EXISTS racun_seq;
DROP SEQUENCE IF EXISTS kredit_seq;
DROP SEQUENCE IF EXISTS tip_racuna_seq;

--kreiranje tabela
CREATE TABLE kredit(
    id integer not null,
    naziv varchar(100) not null,
    oznaka varchar(20) not null,
    opis varchar(500) not null
);
CREATE TABLE tip_racuna(
    id integer not null,
    naziv varchar(100) not null,
    oznaka varchar(20) not null,
    opis varchar(500) not null
);
CREATE TABLE klijent(
    id integer not null,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    broj_lk integer not null,
    kredit integer not null
);
CREATE TABLE racun(
    id integer not null,
    naziv varchar(100) not null,
    oznaka varchar(20) not null ,
    opis varchar(500) not null,
    tip_racuna integer not null,
    klijent integer not null
);

--primarni kljucevi
ALTER TABLE kredit ADD CONSTRAINT
PK_Kredit PRIMARY KEY(id);
ALTER TABLE tip_racuna ADD CONSTRAINT
PK_Tip_Racuna PRIMARY KEY(id);
ALTER TABLE klijent ADD CONSTRAINT
PK_Klijent PRIMARY KEY(id);
ALTER TABLE  racun ADD CONSTRAINT
PK_Racun PRIMARY KEY(id);

--strani kljucevi
ALTER TABLE racun ADD CONSTRAINT
FK_Racun_Klijent FOREIGN KEY(klijent) REFERENCES klijent(id);
ALTER TABLE racun ADD CONSTRAINT
FK_Racun_Tip_Racuna FOREIGN KEY (tip_racuna) REFERENCES tip_racuna(id);
ALTER TABLE klijent ADD CONSTRAINT
FK_Klijent_Kredit FOREIGN KEY(kredit) REFERENCES kredit(id);

--indeksi
CREATE INDEX IDXFK_Racun_Klijent ON racun(klijent);
CREATE INDEX IDXFK_Racun_Tip_Racuna ON racun(tip_racuna);
CREATE INDEX IDXFK_Klijent_Kredit ON klijent(kredit);

CREATE SEQUENCE klijent_seq
INCREMENT 1;
CREATE SEQUENCE racun_seq
INCREMENT 1;
CREATE SEQUENCE tip_racuna_seq
INCREMENT 1;
CREATE SEQUENCE kredit_seq
INCREMENT 1;