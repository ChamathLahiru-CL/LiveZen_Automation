type LoginCredentials = {
  username: string;
  password: string;
};

export function getLoginCredentials(): LoginCredentials {
  const username = process.env.LIVEZEN_USERNAME;
  const password = process.env.LIVEZEN_PASSWORD;

  if (!username || !password) {
    throw new Error('Missing LIVEZEN_USERNAME or LIVEZEN_PASSWORD in .env');
  }

  return { username, password };
}
