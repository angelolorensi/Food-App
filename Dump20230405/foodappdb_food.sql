-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: foodappdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `food_owner` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (152,'Italian Peperoni pizza','https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-pepperoni-0.jpg','Pizza',50,'angelo','food'),(157,'FIlet mignon au Poivre','https://s2.glbimg.com/OA0x-0d8KFOwn-25IpuCYF880PA=/0x0:620x385/984x0/smart/filters:strip_icc()/g.glbimg.com/og/gs/gsat5/f/thumbs/materia/2014/05/13/gastronomismo-3-file-gertrude-stein-620.jpg','Filet Mignon ',60,'angelo','food'),(55,'Green salad','https://media.istockphoto.com/id/598567824/photo/homemade-autumn-apple-walnut-spinach-salad.jpg?s=612x612&w=0&k=20&c=EjFr4J0xf5a4TN-uxfR2Uez_TC4iC-R2FDT5-5FTGi4=','Salad',10,'angelo','food'),(153,'salaame','https://images.tcdn.com.br/img/img_prod/1123713/salame_apimentado_defumado_250g_5_1_884c76a8327415c77a5baf9fb670091b.jpg','Salame',25,'angelo','food'),(154,'Fried fish with lemons','https://espetinhodesucesso.com.br/wp-content/uploads/2022/03/Como-fazer-peixe-frito-inteiro.jpg','Fried Fish',35,'angelo','food'),(155,'French fries from france','https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg','French Fries',45,'angelo','food'),(156,'Doble cheese burguer','https://assets.unileversolutions.com/recipes-v2/230446.jpg','Hamburguer',45,'angelo','food'),(159,'Brazilian meat pastel','https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg','Pastel',20,'angelo','food'),(158,'Bolognese Lasagna','https://www.southernliving.com/thmb/aF5ditmc5n-HNd-uUKh7dZyjezc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg','Lasagna',45,'angelo','food'),(160,'Italian Spaghetti alla Carbonara','https://www.allrecipes.com/thmb/F40KoKiSO6RE1fdmUA7uPJlnvvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7741476-ec382bc5a35644b593b3b8bb931a0175.jpg','Spaghetti Carbonara',25,'angelo','food'),(161,'4 eggs omellete ','https://img.cuisineaz.com/660x660/2015/03/31/i76910-omelette-au-fromage.jpg','Omelette du Fromage',10,'angelo','food'),(162,'Barbiecue sauced pork ribs','https://vivariomarrecife.com.br/wp-content/uploads/2018/10/outback-queridinho.jpg','Ribs on the Barbie',50,'angelo','food'),(163,'new york strip','https://cdn.shopify.com/s/files/1/0456/7413/5574/products/NYStripcooked_1800x1800.jpg?v=1606250397','New York Strip',50,'angelo','food'),(164,'Vegetable Soup','https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg','Soup',30,'angelo','food'),(165,'Macarroni with cheese','https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2459-13f5395e16ea6f00dbd7c120deea3a0b.jpg','Mac and Cheese',30,'angelo','food'),(252,'Best tuna sandwich in the area','https://www.simplyrecipes.com/thmb/ifLmf3l7Hd2t1LvPiNCN8WsQzhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Add-ins-for-tuna-salad-2-bfbc6ae7ae864c40af3e6c9682b2e6a7.jpg','Tuna Sandwich',20,'angelo','food'),(253,'Traditional south brazilian xis','https://www.rbsdirect.com.br/imagesrc/35719497.jpg?w=1024&h=1024&a=c','Xis Gaucho',30,'angelo','food'),(302,'Beef, fries, rice, egg and salad','https://independente.com.br/wp-content/uploads//2022/02/a-la-minuta.jpg','A la minuta',35,'angelo','food'),(352,'Traditional 2liter coke bottle','https://meufestval.vtexassets.com/arquivos/ids/185233/Refrigerante-Coca-Cola-2l.jpg?v=637793154482500000','Coke 2L',10,'angelo','beverage'),(402,'Fresh lemon juice','https://yellowchilis.com/wp-content/uploads/2022/07/lemon-juice-recipe.jpg','Lemon Juice',10,'angelo','beverage'),(403,'Zero sugar coke','https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/r/e/ref-coca-2l-zero-7894900701517.jpg','Coke Zero 2L',10,'angelo','beverage'),(404,'A can of zero sugar coke','https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15967/medium/refrigerante-coca-cola-zero-acucar-350ml_11123.png','Coke Zero 350ml',5,'angelo','beverage'),(405,'A can of coke','https://araujo.vteximg.com.br/arquivos/ids/4185915-1000-1000/07894900010015.jpg?v=637998847234970000','Coke 350ml',5,'angelo','beverage'),(406,'Fresh Orange Juice','https://cdn.healthyrecipes101.com/recipes/images/juices/orange-juice-apple-cider-vinegar-honey-recipe-clavzz7uu001z551b961w6b6a.webp','Orange Juice',8,'angelo','beverage'),(407,'Tropicana Apple Juice','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61cPgyyfqEL.jpg','Apple Juice',6,'angelo','beverage'),(408,'Stella Artois Long Neck','https://emporiostellaartois.vtexassets.com/arquivos/ids/155489/image-9a4eac961b914b029cf376e3bbfcd110.jpg?v=637734742748070000','Stella Artois',6,'angelo','beverage'),(409,'Chopp','https://static3.tcdn.com.br/img/img_prod/887624/conjunto_caneca_de_chopp_400ml_com_2_pecas_ref_ck2937_clink_23896_4_cc1731a4fd2101f17e4b11c52280a8fa.jpg','Chopp',15,'angelo','beverage');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-05 16:49:40
