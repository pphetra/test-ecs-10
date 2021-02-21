import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { insertHistory, selectBalance, updateBalance } from "src/accounts.queries";
import { Client, Pool } from 'pg';

@Controller()
export class AppController {
  private pool: Pool;

  constructor(private readonly appService: AppService) {
    this.pool = new Pool({max: 50});
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/transfer')
  async transfer(): Promise<string> {
    const client = await this.pool.connect()
    await client.query('begin');
    try {
      const fromId = Math.floor(Math.random() * 100000 + 1);
      const toId = Math.floor(Math.random() * 100000 + 1);
      const amount = Math.floor(Math.random() * 1000);
      const tid = Math.floor(Math.random() * 10000000);

      await selectBalance.run(
        {
          aid: fromId,
        },
        client,
      );

      await updateBalance.run(
        {
          aid: fromId,
          amount,
        },
        client,
      );

      await updateBalance.run(
        {
          aid: toId,
          amount: amount * -1,
        },
        client,
      );

      await insertHistory.run(
        {
          aid: fromId,
          bid: toId,
          tid,
          delta: amount,
          mtime: new Date(),
        },
        client,
      );

      client.query('commit');
      client.release();
    } catch (e) {
      client.query('rollback');
      client.release();
      throw new Error('prob');
    }

    return 'ok';
  }
}
