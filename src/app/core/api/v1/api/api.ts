export * from './category.service';
import { CategoryService } from './category.service';
export * from './statement.service';
import { StatementService } from './statement.service';
export * from './transaction.service';
import { TransactionService } from './transaction.service';
export const APIS = [CategoryService, StatementService, TransactionService];
