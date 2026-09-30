/** Placeholder email service — wire to a real provider later. */
export async function sendInquiryEmail(_payload: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean }> {
  return { ok: true };
}
