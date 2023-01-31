CREATE INDEX account_index
ON accounts (id);

CREATE INDEX campaigns_index
ON campaigns (id, account_id);

CREATE INDEX clicks_index
ON clicks (id);

