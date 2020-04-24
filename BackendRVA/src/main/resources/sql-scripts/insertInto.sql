--kredit
INSERT INTO "kredit"("id", "naziv", "oznaka", "opis")
VALUES (nextval('kredit_seq'), 'Nenamjenski hipotekarni kredit', 'hipKredit1', 'Instrument osiguranja je obavezna hipoteka na nekretnini, a namjenu utroška sredstava kredita nije potrebno dokazivati');
INSERT INTO "kredit"("id", "naziv", "oznaka", "opis")
VALUES (nextval('kredit_seq'), 'Nenamjenski (gotovinski) krediti', 'gotKredit2', 'Odobrena sredstva se isplaćuju na vaš tekući račun, a ista možete koristiti prema vlastitim potrebama (za nabavku kućanskih aparata, namještaja, putovanja i slično.');
INSERT INTO "kredit"("id", "naziv", "oznaka", "opis")
VALUES (nextval('kredit_seq'), 'Lombardni kredit', 'lomKredit3', 'Predstavlja nenamjenski kratkoročni ili dugoročni kredit čiji je iznos obezbijeđen 100% depozitom.');
INSERT INTO "kredit"("id", "naziv", "oznaka", "opis")
VALUES (nextval('kredit_seq'), 'Stambeni kredit sa hipotekom', 'stambKredit4', 'Služe isključivo za kupovinu stambenih jedinica, njihovu izgradnju i dovršavanje, dogradnju, renoviranje i adaptaciju stambenog objekta.');
INSERT INTO "kredit"("id", "naziv", "oznaka", "opis")
VALUES (nextval('kredit_seq'), 'Brzi krediti na bankomatima', 'brzKredit5', 'Podižete manje iznose kredita bez kamate iz odobrenog limita kada vi to želite.');

--tip racuna
INSERT INTO "tip_racuna"("id", "naziv", "oznaka", "opis")
VALUES (nextval('tip_racuna_seq'), 'tekući', 'tek1', 'Račun koji se koristi za izvršavanje redovnih platnih transakcija – uplata, prenos i isplata novčanih sredstava.');
INSERT INTO "tip_racuna"("id", "naziv", "oznaka", "opis")
VALUES (nextval('tip_racuna_seq'), 'žiro', 'žir2', 'Račun koji se koristi kada se prima honorar ili naknada od povremenog posla');
INSERT INTO "tip_racuna"("id", "naziv", "oznaka", "opis")
VALUES (nextval('tip_racuna_seq'), 'štedni', 'šte3', ' Besplatan račun i namenjen je klijentima koji su se opredelili za samo jednu oblast bankarskog poslovanja.');
INSERT INTO "tip_racuna"("id", "naziv", "oznaka", "opis")
VALUES (nextval('tip_racuna_seq'), 'namjenski', 'namj4', 'Služi za priliv novčanih sredstava, po osnovu prodatih HoV ili za uplatu novčanih sredstava prilikom kupovine HoV.');
INSERT INTO "tip_racuna"("id", "naziv", "oznaka", "opis")
VALUES (nextval('tip_racuna_seq'), 'devizni', 'dev5', 'Može se koristiti za prilive kako iz inostranstva.');

--klijent
INSERT INTO "klijent"("id", "ime", "prezime", "broj_lk", "kredit")
VALUES (nextval('klijent_seq'), 'Milica', 'Despotović', '536521458',1);
INSERT INTO "klijent"("id", "ime", "prezime", "broj_lk", "kredit")
VALUES (nextval('klijent_seq'), 'Nataša', 'Ilić', '789665412',5);
INSERT INTO "klijent"("id", "ime", "prezime", "broj_lk", "kredit")
VALUES (nextval('klijent_seq'), 'Dajana', 'Stajić', '889966335',4);
INSERT INTO "klijent"("id", "ime", "prezime", "broj_lk", "kredit")
VALUES (nextval('klijent_seq'), 'Marko', 'Lukić', '993364461',2);
INSERT INTO "klijent"("id", "ime", "prezime", "broj_lk", "kredit")
VALUES (nextval('klijent_seq'), 'Radmila', 'Trišić', '010198876',3);

--racun
INSERT INTO "racun"("id", "naziv", "oznaka", "opis", "tip_racuna", "klijent")
VALUES (nextval('racun_seq'), 'Farmer Hit Basic ', 'farHit1', 'Namjenski račun poljoprivrednika',4,1);
INSERT INTO "racun"("id", "naziv", "oznaka", "opis", "tip_racuna", "klijent")
VALUES (nextval('racun_seq'), 'Start račun', 'start', 'Tekući račun je posebno kreiran u skladu sa potrebama mladih, starosti od 18 do 27 godina. Bez troškova mesečnog održavanja.',1,3);
INSERT INTO "racun"("id", "naziv", "oznaka", "opis", "tip_racuna", "klijent")
VALUES (nextval('racun_seq'), 'Ekspert račun', 'eksp', 'Namjenski račun za mali biznis i preduzetništvo',4,2);
INSERT INTO "racun"("id", "naziv", "oznaka", "opis", "tip_racuna", "klijent")
VALUES (nextval('racun_seq'), 'Klasik račun', 'klasik', 'Tekući račun namenjen je penzionerima',1,4);
INSERT INTO "racun"("id", "naziv", "oznaka", "opis", "tip_racuna", "klijent")
VALUES (nextval('racun_seq'), 'Super štednja račun', 'super', 'Štedni račun sa kamatnom stopom od 1.50%.',3,5);

