
inserting data 
INSERT INTO users (username,pwd,email) VALUES ('raiyan','raiyan123','raiyan@gmail.com');

INSERT INTO users = where you wanna insert so select it 
(username,pwd,email) = select the columns to add value 
VALUES ('raiyan','raiyan123','raiyan@gmail.com'); = these are the values that we are inserting 

updating data 
UPDATE users SET username = 'raiyan', pwd = 'raiyan456' WHERE id = 2

UPDATE users SET username = 'raiyan', pwd = 'raiyan456' WHERE id = 1 OR id = 2
UPDATE users SET username = 'raiyan', pwd = 'raiyan456' WHERE username = 'faizan' OR pwd = 'faizan123'
UPDATE users SET username = 'raiyan', pwd = 'raiyan456' WHERE username = 'faizan' AND pwd = 'faizan123' 
there are plenty of way to change the data as this indicate if the username = 'faizan' and pwd = 'faizan123' 
then change the username to 'raiyan' and pwd to 'raiyan456' in the whole data base 

deleating data
DELETE FROM users WHERE id = 5;