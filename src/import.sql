insert into menu(id, status, week) values(1, 0, 0);
insert into menu(id, status, week) values(2, 0, 1);
insert into menu(id, status, week) values(3, 0, 2);
insert into menu(id, status, week) values(4, 0, 3);
insert into menu(id, status, week) values(5, 0, 4);
insert into menu(id, status, week) values(6, 0, 5);
insert into menu(id, status, week) values(7, 0, 6);

insert into nature(id, "type", description) values(1, 0, 'Normal');
insert into nature(id, "type", description) values(2, 0, 'Branda');

insert into diet(id, status, patient_id) values(1, 0, 1243704);

insert into meal(id, status, diet_id, nature_id) values(1, 0, 1, 1);
insert into meal(id, status, diet_id, nature_id) values(2, 0, 1, 2);
insert into meal(id, status, diet_id, nature_id) values(3, 0, 1, 2);