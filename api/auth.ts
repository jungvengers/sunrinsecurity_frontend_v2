export async function logout(): Promise<void> {
  await getAPI("/auth/logout");
}
