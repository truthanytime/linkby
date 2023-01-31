SELECT bb.id AS account_id, 
	bb.name AS account_name ,
	CONCAT(YEAR(bb.created_at), '-', MONTH(bb.created_at)) AS `month` ,
	SUM(aa.click_count) AS num_clicks  
FROM (
	SELECT a.*, b.`account_id` AS baccount_id, COUNT(*) AS click_count FROM clicks a 
	LEFT JOIN campaigns b ON(a.`campaign_id`=b.id) 
	WHERE DATEDIFF(b.`end_date`, b.`start_date`)>7 
	GROUP BY b.id
	) aa 
	
LEFT JOIN (
	SELECT c.* FROM accounts c 
	LEFT JOIN campaigns d ON (c.id=d.`account_id`)
	WHERE DATEDIFF(NOW(), d.`created_at`)<180
	GROUP BY c.id
	) bb ON (bb.id=aa.baccount_id) 
GROUP BY YEAR(bb.created_at), MONTH(bb.created_at)