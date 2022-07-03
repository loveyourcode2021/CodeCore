LAB1
INSERT INTO students (first_name, last_name, age, email, registration_date, phone_number) VALUES ('John', 'Smith', '45', 'john@smith.com', 'Jan 1, 2016', '778.778.7787');
select * from students order by id desc limit 1;
update students set age = 50 where id - 504;
delete from students where id = 504; 
select * from students where id = 504;


lab2-1

//From the students table:
//Select the first 10 students whose ages are between 35 and 45.
//Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id in ascending order then first name in a descending order.
//Select the 10 oldest students (You should ignore students with an age that is `NULL`).
select * from students where age is not null and 
//Select all students with age 45 whose last names contain the letter n.
select * from students where age =  45 and last_name ILIKE '%n%'; 
//From the products table:


//Select all the products that are on sale.
//Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
//Select all the products priced between 25 and 50 (regular price) and that are on sale.

lab3
//Select the product whose stock has the most value (use sale price)
//Select the most expensive product whose price is between 25 and 50 with remaining quantity
select * from products where products.remaining_quantity >= 25 and products.remaining_quantity<=50 order by sale_price desc limit 1;
//
SELECT * FROM products as p WHERE p.remaining_quantity > 0 and p.price > p.sale_price order by p.price, p.name;
//Select all products on sale with remaining quantity ordered by their price and then their name
SELECT * FROM products as p WHERE p.remaining_quantity > 0 and p.price > p.sale_price order by p.price, p.name limit 20 offset 20;
//Select the second set 20 results based on the previous query
SELECT AVG(price) FROM prodcuts
//Find the average price of all products
SELECT AVG(price) FROM prodcuts
//Find the average sale_price of all products that are on sale
select AVG(price) from products where price>sale_price
//Find the average price of all products that are on sale with remaining quantity
select AVG(price) from products where remaining_quantity is not null;
//Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
UPDATE products SET remaining_quantity = (RANDOM() * 20 + 5) where name ILIKE '%paper%' or name ILIKE `%paper%`;
//Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
select * from products where remaining_quantity > 0 and name ILIKE '%paper%' or name ILIKE '%price%' and products.remaining_quantity = (select RNAD() * (25-10)+5);
//Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity
select * from products where erorder by  price desc where remaining_quantity 
//Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`/
select * from products group by 
//[stretch] Update the most expensive product to have double its quantity in a single query
update products set 

//Select all products on sale with remaining quantity ordered by their price and then their name
SELECT * FROM products as p WHERE p.remaining_quantity > 0 and p.price > p.sale_price order by p.price, p.name;
SELECT * FROM products as p WHERE p.remaining_quantity > 0 and p.price > p.sale_price order by p.price, p.name limit 20 offset 20;≠≠≠≠