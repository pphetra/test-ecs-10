/* @name UpdateBalance */
update pgbench_accounts
set abalance = abalance + :amount
where aid = :aid;

/* @name InsertHistory */
insert into pgbench_history (tid, bid, aid, delta, mtime)
values (:tid, :bid ,:aid, :delta, :mtime);

/* @name SelectBalance */
select abalance from pgbench_accounts where aid = :aid FOR UPDATE;
