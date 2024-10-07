import { faker } from '@faker-js/faker'; // Ensure you are using the correct version

// Custom function to create a transaction
export const createTransaction = () => ({
  id: faker.datatype.uuid(),
  userId: faker.datatype.uuid(), // Assuming you want random userId
  type: faker.helpers.arrayElement(['Deposit', 'Withdrawal']),
  amount: parseFloat(faker.finance.amount(10, 1000, 2)), // Amount between $10 and $1000
  date: faker.date.recent(),
  status: faker.helpers.arrayElement(['Completed', 'Pending', 'Failed']),
});

// Function to generate mock users (if needed)
export const generateMockUser = () => ({
  id: faker.datatype.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  walletBalance: parseFloat(faker.finance.amount(0, 10000, 2)), // Balance between $0 and $10,000
  createdAt: faker.date.past(),
});

// Function to generate mock data
export const generateMockData = (numUsers, numTransactions) => {
  const users = Array.from({ length: numUsers }, generateMockUser);
  const transactions = Array.from({ length: numTransactions }, createTransaction);

  return { users, transactions };
};
