INT(11) -2147483648 , 2147483647
BIGINT - 56789067890900

FLOAT
DOUBLE 

VARCHAR(10) - only 10 characters will be allowed 

TEXT -  for more characters then VARCHAR 

DATE 2026-03-05

same as DATE but with TIME 
DATETIME 2026-03-05 17:30:00

there are bits for each of the datatype 

for saving only negetive number 
INT(11) SIGNED - only negetive number allowed
INT(11) SIGNED - only positive number allowed 

once you use any of them you can store from 0 to much more greter number then this 2147483647 number as we have used SIGNED/UNSIGNED so it have cut down the space for the NEGATIVE/POSITIVE number which was there 

CREATE TABLE users(
	id INT(11) NOT NULL AUTO_INCREMENT,
  	username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIME,
    PRIMARY KEY (id)
);

we will create an comment table so that the users comment can be stored here 

so the user created an account its data get stored into the users table now the user 
has added some comment on the web app so the comment data also stored in the comment table 
after that he deleated the account so means the users account has been deleted so does that 
means the comment data on comment table that he made will get deleated too?
the answer is no thats not an good way to do so

CREATE TABLE comments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    comment_text TEXT NOT NULL,
    user_id INT(11) NOT NULL,   // remove the not null as we using SET NULL to foraign key 
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIME,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL (other operation  as NO ACTION , CASCADE)
);

FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION  
it will do nothing if the user deleted 

FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
it will delete the comment on the user account deleation which isnt good practice tough for comment 

error explain 
the error 1005 was coming because we have said 
user_id REFERENCES id from the table users now the relation has been made 
after that if the user delete account then set the user_id to NULL but inn inizial phase 
we set the user_id to NOT NULL thats why the error saying an error into foreign key