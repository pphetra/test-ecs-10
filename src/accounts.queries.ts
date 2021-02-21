/** Types generated for queries found in "src/accounts.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'UpdateBalance' parameters type */
export interface IUpdateBalanceParams {
  amount: number | null | void;
  aid: number | null | void;
}

/** 'UpdateBalance' return type */
export type IUpdateBalanceResult = void;

/** 'UpdateBalance' query type */
export interface IUpdateBalanceQuery {
  params: IUpdateBalanceParams;
  result: IUpdateBalanceResult;
}

const updateBalanceIR: any = {"name":"UpdateBalance","params":[{"name":"amount","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":77,"b":82,"line":3,"col":27}]}},{"name":"aid","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":97,"b":99,"line":4,"col":13}]}}],"usedParamSet":{"amount":true,"aid":true},"statement":{"body":"update pgbench_accounts\nset abalance = abalance + :amount\nwhere aid = :aid","loc":{"a":26,"b":99,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * update pgbench_accounts
 * set abalance = abalance + :amount
 * where aid = :aid
 * ```
 */
export const updateBalance = new PreparedQuery<IUpdateBalanceParams,IUpdateBalanceResult>(updateBalanceIR);


/** 'InsertHistory' parameters type */
export interface IInsertHistoryParams {
  tid: number | null | void;
  bid: number | null | void;
  aid: number | null | void;
  delta: number | null | void;
  mtime: Date | null | void;
}

/** 'InsertHistory' return type */
export type IInsertHistoryResult = void;

/** 'InsertHistory' query type */
export interface IInsertHistoryQuery {
  params: IInsertHistoryParams;
  result: IInsertHistoryResult;
}

const insertHistoryIR: any = {"name":"InsertHistory","params":[{"name":"tid","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":196,"b":198,"line":8,"col":9}]}},{"name":"bid","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":202,"b":204,"line":8,"col":15}]}},{"name":"aid","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":208,"b":210,"line":8,"col":21}]}},{"name":"delta","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":214,"b":218,"line":8,"col":27}]}},{"name":"mtime","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":222,"b":226,"line":8,"col":35}]}}],"usedParamSet":{"tid":true,"bid":true,"aid":true,"delta":true,"mtime":true},"statement":{"body":"insert into pgbench_history (tid, bid, aid, delta, mtime)\nvalues (:tid, :bid ,:aid, :delta, :mtime)","loc":{"a":129,"b":227,"line":7,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * insert into pgbench_history (tid, bid, aid, delta, mtime)
 * values (:tid, :bid ,:aid, :delta, :mtime)
 * ```
 */
export const insertHistory = new PreparedQuery<IInsertHistoryParams,IInsertHistoryResult>(insertHistoryIR);


/** 'SelectBalance' parameters type */
export interface ISelectBalanceParams {
  aid: number | null | void;
}

/** 'SelectBalance' return type */
export interface ISelectBalanceResult {
  abalance: number | null;
}

/** 'SelectBalance' query type */
export interface ISelectBalanceQuery {
  params: ISelectBalanceParams;
  result: ISelectBalanceResult;
}

const selectBalanceIR: any = {"name":"SelectBalance","params":[{"name":"aid","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":308,"b":310,"line":11,"col":51}]}}],"usedParamSet":{"aid":true},"statement":{"body":"select abalance from pgbench_accounts where aid = :aid FOR UPDATE","loc":{"a":257,"b":321,"line":11,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select abalance from pgbench_accounts where aid = :aid FOR UPDATE
 * ```
 */
export const selectBalance = new PreparedQuery<ISelectBalanceParams,ISelectBalanceResult>(selectBalanceIR);


