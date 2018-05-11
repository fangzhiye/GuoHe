create database GuoHe;
use GuoHe;
CREATE TABLE topics_tbl(
   `topic_id` INT UNSIGNED AUTO_INCREMENT,
   `topic_content` VARCHAR(100) NOT NULL,
   `topictype_id` INT UNSIGNED ,
   `topic_type` VARCHAR(20) NOT NULL,
   PRIMARY KEY ( `topic_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO topics_tbl ( topic_id, topic_content, topictype_id,topic_type )
                       VALUES
                       ( 1, "我哪一点最吸引你",1,"爱情");
alter table topics_tbl add user_type int;
update topics_tbl set user_type=0 where topic_id =1