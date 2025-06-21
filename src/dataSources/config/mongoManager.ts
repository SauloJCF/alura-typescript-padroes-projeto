import { MongoClient } from 'mongodb';

export class MongoManager {
    private client: MongoClient|null = null;

    public static instance: MongoManager;

    private constructor() {}

    public static getInstance(): MongoManager {
      if (!MongoManager.instance) {
        MongoManager.instance = new MongoManager();
      } 

      return MongoManager.instance;
    }

    public async connect(url: string) {
      if (!this.client) {
        this.client = await MongoClient.connect(url);
      }
    }
}