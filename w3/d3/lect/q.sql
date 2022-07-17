-- For a single Line comment
/*
This
is a multi 
line comment
*/

/*
Some psql commands:
\l lists all the databases in psql
\c <db_name>   to switch to the specific database, in this case "db_name"
Restoring the database from a backup:
psql -d sql_lab < ./Downloads/sql_lab.sql

sql_lab=# \dt This lists all the tables in the sql_lab database to which we are connected
sql_lab=# \d students This will give you the details of the students table

*/

/* CREATE A NEW TABLE IN THE DATABASE sql_lab:

*/

-- CREATE TABLE cars ("id" SERIAL, "make" VARCHAR(50), "model" VARCHAR(50), "doors" INTEGER, "description" TEXT);

-- It's a common convention to write all SQL
-- keywords (e.g. CREATE TABLE, SELECT, INNER JOIN, etc.)
-- using all upper case letters.

CREATE TABLE "cars" (
    "id" SERIAL, /* Auto incrementing four-byte integer*/
        /*
    --     [BIG]SERIAL is a special data type unique to PostgreSQL.
    --     It creates a [BIG]INT that are auto-incremented. When a new
    --     row is inserted, we'll not specify this column ourselves.
    --     We call this "id" the PRIMARY KEY. It acts as a unique identifier
    --     for rows of the table.
    --   */
    "make" VARCHAR(50), /* A charcter string with max 50 characteres length*/
    "model" VARCHAR(50),
    "doors" INTEGER, /* Whole number*/
    "description" TEXT /* A cahracter string with unlimited length */
);

-- Important Notes:
-- ALWAYS terminate SQL queries with a `;`. This
-- absolutely required!

-- ALTER TABLE

ALTER TABLE students ADD COLUMN graduation_date TIMESTAMP;

-- CREATING ROWS
-- https://www.postgresql.org/docs/9.5/sql-insert.html

--CRUD - Create Read Update Delete

--CREATE
-- For single insert
INSERT INTO students
(first_name, last_name, email, phone_number)
VALUES
('Tam', 'Smith', 'example@codecore.ca', '555-555-5555');

-- For multiple inserts
INSERT INTO students
(first_name, last_name, email, phone_number)
VALUES
('Tam', 'Bob', 'example2@codecore.ca', '555-555-5555'),
('Tam', 'Doe', 'example3@codecore.ca', '555-555-5555'),
('Tam', 'Black', 'example4@codecore.ca', '555-555-5555');

-- READ
-- SELECT <column> FROM <table> [WHERE] [GROUP] [HAVING] [ORDER BY] [LIMIT] [OFFSET] [FETCH] [FOR]
 
SELECT * FROM students;

-- WHERE is used to filter columns

SELECT * FROM students WHERE first_name = 'Tam';

SELECT first_name, last_name FROM students WHERE first_name = 'Tam';

SELECT first_name, last_name FROM students WHERE "id" =1;

SELECT first_name, last_name FROM students WHERE "id" < 5;

SELECT first_name, last_name FROM students WHERE "id" > 100;

SELECT * FROM students WHERE "age" > 40;

SELECT first_name FROM students WHERE "registration_date" >= current_date - 1000; --will return none because database is old

-- AND/OR
SELECT * FROM students WHERE "id" > 100 AND "id" < 200;

SELECT first_name, age FROM students WHERE "age" > 40 OR "age" < 20;

-- NULL OR NOT NULL

SELECT first_name, last_name, age FROM students WHERE "age" < 20 OR "age" IS NULL;

-- LIKE AND ILIKE -- like is exact and case sensitive, ilike is case insensitive

SELECT * FROM students WHERE first_name LIKE 'Jo%';

SELECT * FROM students WHERE first_name ILIKE 'jo%';

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

--BETWEEN

SELECT age FROM students WHERE age BETWEEN 25 AND 35; 

SELECT first_name, last_name, registration_date FROM students WHERE registration_date BETWEEN current_date - 1500 and current_date - 1000;

-- ORDER BY (ASC / DESC)

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC; 

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name, age;

-- LIMIT

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC LIMIT 3;

-- LIMIT  
-- clause used to limit the data to the x rows
-- Must put it at the end of the query

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'ke%' LIMIT 10;


--OFFSET
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC OFFSET 2; 

--AGGREGATE FUNCTIONS
--COUNT
SELECT COUNT(*) FROM students;

SELECT COUNT(*) FROM students WHERE age > 25;

--AS
SELECT COUNT(*) AS student_count FROM students;

--SUM
SELECT SUM(age) AS total_years FROM students;

--AVG
SELECT AVG(age) AS average_years FROM students;

--ROUND
SELECT ROUND(AVG(age)) AS average_years FROM students;


--MIN AND MAX
SELECT MAX(age) AS max_age, MIN(age) AS min_age, AVG(age) AS average_age, SUM(age) AS total_years FROM students;

--GROUP BY
SELECT COUNT(*) AS occurences, first_name FROM students GROUP BY first_name;

--UPDATE
UPDATE students 
SET first_name = 'Steph'
WHERE id=1;

--DELETE
DELETE FROM students WHERE id=504;



–q
select * from students where age = (select max(age) from students) limit 10;
select * from products where sale_price < price;
SELECT * FROM products WHERE remaining_quantity > 0 and price > sale_price;
SELECT SUM(sales_price) from products;

select * from products where sale_price = ( select MAX(sale_price) from products);
select * from products where products.remaining_quantity >= 25 and products.remaining_quantity<=50 order by sale_price desc limit 1;
SELECT * FROM products WHERE remaining_quantity > 0 and price > sale_price;
/*
lab2
Using data from this morning's lesson, write the following SQL Queries:

From the students table:

Select the first 10 students whose ages are between 35 and 45.
select * from students where ages >= 35 and ages <= 45 limit 10 offset 20;

Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. 
The students must be ordered by their id in ascending order then first name in a descending order.
select * from students where age > 25 and first_name ILIKE '%le%'limit 10 offset 20;

Select the 10 oldest students (You should ignore students with an age that is `NULL`).
Select all students with age 45 whose last names contain the letter n.
From the products table:

Select all the products that are on sale.
Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
Select all the products priced between 25 and 50 (regular price) and that are on sale.
*/